"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCartStore } from "../../_store/useCartStore";
import { useCheckoutStore } from "../../_store/useCheckoutStore";
import { FaCheckCircle } from "react-icons/fa";

type Snapshot = {
  fullName?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image_url: string;
  }>;
  subtotal: number;
  timestamp: number;
};

const ORDER_SNAPSHOT_KEY = "glowcart-order-snapshot";
const SNAPSHOT_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default function Page() {
  const shippingInfo = useCheckoutStore((s) => s.shippingInfo);
  const clearShippingInfo = useCheckoutStore((s) => s.clearShippingInfo);
  const cartItems = useCartStore((s) => s.cartItems);
  const clearCart = useCartStore((s) => s.clearCart);

  const computedSubtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);

  useEffect(() => {
    // Try to load existing snapshot from localStorage first
    const savedSnapshot = localStorage.getItem(ORDER_SNAPSHOT_KEY);

    if (savedSnapshot) {
      try {
        const parsedSnapshot: Snapshot = JSON.parse(savedSnapshot);
        // Check if snapshot is not expired (within 24 hours)
        if (Date.now() - parsedSnapshot.timestamp < SNAPSHOT_EXPIRY) {
          setSnapshot(parsedSnapshot);
          return;
        } else {
          // Remove expired snapshot
          localStorage.removeItem(ORDER_SNAPSHOT_KEY);
        }
      } catch {
        // Remove invalid snapshot
        localStorage.removeItem(ORDER_SNAPSHOT_KEY);
      }
    }

    // Create new snapshot if we have cart items and shipping info
    if (cartItems.length > 0 && shippingInfo) {
      const newSnapshot: Snapshot = {
        fullName: shippingInfo.fullName,
        address: shippingInfo.address,
        items: cartItems,
        subtotal: computedSubtotal,
        timestamp: Date.now(),
      };

      // Save snapshot to localStorage
      localStorage.setItem(ORDER_SNAPSHOT_KEY, JSON.stringify(newSnapshot));
      setSnapshot(newSnapshot);

      // Clear stores after creating snapshot
      clearCart();
      clearShippingInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const total = snapshot?.subtotal ?? 0;

  return (
    <section className="py-16 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-beige)] mb-4">
          <FaCheckCircle className="text-[var(--color-rose-gold)]" size={48} />
        </div>
        <h1 className="text-4xl font-playfair text-[#4A071C] mb-2">
          Order Confirmed
        </h1>
        <p className="text-[var(--color-rose-gold)] opacity-90 mb-8">
          Thank you for your purchase! A confirmation has been sent to your
          email.
        </p>

        {snapshot && (
          <div className="text-left bg-white rounded-2xl shadow-lg p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#4A071C] mb-2">
                Shipping To
              </h2>
              <p className="text-[#4A071C]">{snapshot.fullName}</p>
              {snapshot.address && (
                <p className="text-[#4A071C]">
                  {snapshot.address.street}, {snapshot.address.city},{" "}
                  {snapshot.address.state} {snapshot.address.postalCode},{" "}
                  {snapshot.address.country}
                </p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#4A071C] mb-3">
                Items
              </h2>
              <ul className="divide-y divide-gray-100">
                {snapshot.items.map((item) => (
                  <li
                    key={item.id}
                    className="py-3 flex items-center justify-between"
                  >
                    <span className="text-[#4A071C] line-clamp-1 mr-4">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold text-[var(--color-rose-gold)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-3 flex items-center justify-between">
                <span className="font-semibold text-[#4A071C]">Total</span>
                <span className="text-xl font-bold text-[var(--color-rose-gold)]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex gap-3 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl shadow hover:bg-[var(--color-rose-gold)] hover:!text-white transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-rose-gold)] !text-white rounded-xl shadow hover:bg-opacity-90 hover:!text-white transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
