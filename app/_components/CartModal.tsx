"use client";

import { useCartStore } from "../_store/useCartStore";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartModal() {
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const router = useRouter();

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={toggleCart}
      />

      {/* Cart Modal */}
      <div className="fixed right-0 top-0 h-screen w-[400px] bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#4A071C]">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-[#FDF4F6] rounded-full transition-colors"
          >
            <FaTimes size={24} color="#4A071C" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-250px)]">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image_url}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#4A071C]">{item.name}</h3>
                    <p className="text-[var(--color-rose-gold)] font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                        className="w-6 h-6 flex items-center justify-center bg-[#FDF4F6] text-[#4A071C] rounded hover:bg-[var(--color-rose-gold)] hover:text-white"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center bg-[#FDF4F6] text-[#4A071C] rounded hover:bg-[var(--color-rose-gold)] hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 self-start"
                  >
                    <FaTimes size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t pt-4 mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-[#4A071C]">Total:</span>
              <span className="font-bold text-[var(--color-rose-gold)]">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="flex-1 py-2 px-4 border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl
                  hover:bg-[var(--color-rose-gold)] hover:text-white transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  toggleCart();
                  router.push("/checkout");
                }}
                className="flex-1 py-2 px-4 bg-[var(--color-rose-gold)] text-white rounded-xl
                  hover:bg-opacity-90 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
