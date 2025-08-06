import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-beige)] text-[var(--color-rose-gold)]">
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
                  href="/about"
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
                  href="/shipping"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#4A071C] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
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
