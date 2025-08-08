"use client";

import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useCartStore } from "../_store/useCartStore";

export default function NavLink() {
  const cartCount = useCartStore((state) => state.cartCount);
  const toggleCart = useCartStore((state) => state.toggleCart);

  return (
    <nav className="flex gap-8 items-center">
      <Link href="/" className="accent font-bold">
        Home
      </Link>
      <Link href="/shop" className="accent">
        Shop
      </Link>
      <Link href="/blog" className="accent">
        Blog
      </Link>
      <Link href="/contact" className="accent">
        Contact
      </Link>
      <button
        onClick={toggleCart}
        className="accent flex items-center relative"
        aria-label="Cart"
      >
        <span className="mr-1">
          <FaShoppingCart color="var(--color-rose-gold)" size={24} />
        </span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[var(--color-rose-gold)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        )}
      </button>
      <Link href="/user" className="accent flex items-center" aria-label="User">
        <FaUser color="var(--color-rose-gold)" size={24} />
      </Link>
    </nav>
  );
}
