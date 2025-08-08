"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { useCartStore } from "../_store/useCartStore";
import ShippingForm from "../_components/ShippingForm";

export default function ShippingSummary() {
  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-playfair text-[#4A071C] mb-8">Checkout</h1>

        {/* Order Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ShippingForm />
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-[#4A071C]">
                  Order Summary
                </h2>
                {cartItems.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-[var(--color-rose-gold)] hover:opacity-80"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <Link
                    href="/shop"
                    className="inline-block px-5 py-2 border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl hover:bg-[var(--color-rose-gold)] hover:text-white transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <li key={item.id} className="py-4 flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image_url}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="font-medium text-[#4A071C] line-clamp-2">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                            <button
                              aria-label={`Remove ${item.name}`}
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FaTimes />
                            </button>
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(0, item.quantity - 1)
                                  )
                                }
                                className="w-7 h-7 flex items-center justify-center bg-[#FDF4F6] text-[#4A071C] rounded hover:bg-[var(--color-rose-gold)] hover:text-white"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-7 h-7 flex items-center justify-center bg-[#FDF4F6] text-[#4A071C] rounded hover:bg-[var(--color-rose-gold)] hover:text-white"
                              >
                                +
                              </button>
                            </div>
                            <p className="font-semibold text-[var(--color-rose-gold)]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-[#4A071C]">
                      <span>Subtotal</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#4A071C]">
                      <span>Shipping</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="border-t pt-3 flex items-center justify-between">
                      <span className="font-semibold text-[#4A071C]">
                        Total
                      </span>
                      <span className="text-xl font-bold text-[var(--color-rose-gold)]">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Taxes calculated at the next step.
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/shop"
                      className="flex-1 py-3 px-4 border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl text-center hover:bg-[var(--color-rose-gold)] hover:text-white transition-colors"
                    >
                      Continue Shopping
                    </Link>
                    <button
                      type="submit"
                      form="shipping-form"
                      className="flex-1 py-3 px-4 bg-[var(--color-rose-gold)] text-white rounded-xl hover:bg-opacity-90 transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
