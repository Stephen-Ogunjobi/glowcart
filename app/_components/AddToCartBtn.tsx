"use client";
import { useCartStore } from "../_store/useCartStore";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Product } from "./Products";

export default function AddToCartBtn({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <button
      onClick={() => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
      }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-rose-gold)] text-white
                  font-medium shadow-sm hover:shadow-lg hover:bg-opacity-95 active:scale-[.98]
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]/40
                  transition-all duration-300"
    >
      <FaShoppingBag className="text-base" />
      <span>Add to Cart</span>
    </button>
  );
}
