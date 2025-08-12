"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useCartStore } from "../_store/useCartStore";

export default function NavLink() {
  const cartCount = useCartStore((state) => state.cartCount);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="relative flex items-center gap-2 md:gap-4">
      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-2 md:gap-3">
        <Link
          href="/"
          className={`navlink font-semibold ${
            isActive("/") ? "navlink-active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`navlink ${isActive("/shop") ? "navlink-active" : ""}`}
        >
          Shop
        </Link>
        <Link
          href="/blog"
          className={`navlink ${isActive("/blog") ? "navlink-active" : ""}`}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={`navlink ${isActive("/contact") ? "navlink-active" : ""}`}
        >
          Contact
        </Link>
      </div>

      {/* Right-side actions */}
      <div className="flex items-center gap-2 md:gap-3 ml-auto">
        <button
          onClick={toggleCart}
          className="accent flex items-center relative hover-float navlink"
          aria-label="Cart"
        >
          <span className="mr-1">
            <FaShoppingCart color="var(--color-rose-gold)" size={20} />
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--color-rose-gold)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs soft-shadow badge-pulse">
              {cartCount}
            </span>
          )}
        </button>

        {/* User icon on md+ */}
        <Link
          href="/user"
          className={`accent items-center navlink hidden md:flex ${
            isActive("/user") ? "navlink-active" : ""
          }`}
          aria-label="User"
        >
          <FaUser color="var(--color-rose-gold)" size={18} />
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="navlink md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-dropdown"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <FaTimes color="var(--color-rose-gold)" size={18} />
          ) : (
            <FaBars color="var(--color-rose-gold)" size={18} />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-nav-dropdown"
          className="absolute right-0 top-full mt-3 w-64 card elevated p-2 md:hidden"
        >
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className={`navlink w-full ${
                isActive("/") ? "navlink-active" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`navlink w-full ${
                isActive("/shop") ? "navlink-active" : ""
              }`}
              onClick={closeMenu}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className={`navlink w-full ${
                isActive("/blog") ? "navlink-active" : ""
              }`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`navlink w-full ${
                isActive("/contact") ? "navlink-active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/user"
              className={`navlink w-full ${
                isActive("/user") ? "navlink-active" : ""
              }`}
              onClick={closeMenu}
            >
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
