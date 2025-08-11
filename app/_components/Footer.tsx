import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaLeaf,
  FaLock,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section text-[var(--color-rose-gold)]">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-8 pt-16">
        <div className="card elevated p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-playfair text-[#4A071C]">
              Join our glow club
            </h3>
            <p className="text-sm text-[#4A071C]/80">
              Exclusive drops, tips, and 10% off your first order.
            </p>
          </div>
          <form className="flex w-full md:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 px-4 py-3 rounded-full border border-[var(--border-soft)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)]"
              aria-label="Email address"
            />
            <button className="btn btn-gradient btn-gradient-dark whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="block mb-6">
              <Image
                src="/Elegant GlowCart Skincare Logo.png"
                alt="GlowCart"
                width={120}
                height={120}
                className="rounded-full"
              />
            </Link>
            <p className="text-sm opacity-80 max-w-xs">
              Your destination for premium skincare products that help you
              achieve your natural glow.
            </p>
            <ul className="flex flex-col gap-2 text-sm text-[#4A071C]">
              <li className="inline-flex items-center gap-2">
                <FaLeaf /> Vegan & cruelty-free
              </li>
              <li className="inline-flex items-center gap-2">
                <MdVerified /> Dermatologist tested
              </li>
              <li className="inline-flex items-center gap-2">
                <FaLock /> Secure checkout
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#4A071C]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#4A071C]">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#4A071C]">
              Connect With Us
            </h3>
            <div className="space-y-3 mb-6">
              <p>Email: hello@glowcart.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-[#4A071C] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#4A071C] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#4A071C] transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#4A071C] transition-colors"
              >
                <FaTiktok />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-3xl opacity-80">
              <FaCcVisa /> <FaCcMastercard /> <FaCcAmex /> <FaCcPaypal />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-rose-gold)] border-opacity-20">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} GlowCart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
