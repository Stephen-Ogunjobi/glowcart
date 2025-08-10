import Link from "next/link";
import { FaUser, FaShoppingBag, FaInfoCircle } from "react-icons/fa";

export default function UserPage() {
  return (
    <div className="bg-gradient-to-b from-[var(--color-offwhite)] to-[var(--color-beige)]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-12 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4A071C]">
          Your Account
        </h1>
        <p className="mt-3 text-[var(--color-rose-gold)] opacity-80 max-w-2xl">
          You are browsing as a guest. This is a demo experience, so there’s no
          sign-in or account creation.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-[var(--color-pink)] bg-opacity-40 text-[#4A071C]">
                <FaUser className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4A071C]">
                  Guest Profile
                </h2>
                <p className="text-sm opacity-75">Limited demo access</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="opacity-70">Name</span>
                <span className="font-medium">Guest</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Email</span>
                <span className="font-medium">—</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Status</span>
                <span className="font-medium">Guest (no account)</span>
              </div>
            </div>
          </div>

          {/* Orders & Cart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-[var(--color-pink)] bg-opacity-40 text-[#4A071C]">
                <FaShoppingBag className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4A071C]">
                  Orders & Cart
                </h2>
                <p className="text-sm opacity-75">Demo-only behavior</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Orders are not saved to an account in demo mode.</li>
              <li>Your cart works locally during your session.</li>
              <li>Checkout flow is simulated for demonstration.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="px-5 py-2.5 rounded-full bg-[var(--color-rose-gold)] !text-white font-semibold hover:bg-opacity-90 transition-all"
              >
                Continue Shopping
              </Link>
              <Link
                href="/cart"
                className="px-5 py-2.5 rounded-full border border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] font-semibold hover:bg-[var(--color-pink)] hover:bg-opacity-40 transition-all"
              >
                View Cart
              </Link>
            </div>
          </div>

          {/* About Demo */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-[var(--color-pink)] bg-opacity-40 text-[#4A071C]">
                <FaInfoCircle className="text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#4A071C]">
                  About this demo
                </h2>
                <p className="text-sm opacity-75">What’s included</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                Authentication, saved addresses, and order history are disabled
                in this demo. In a real app, you would be able to create an
                account, track orders, and manage your profile here.
              </p>
              <p>
                Need help or feedback? Reach out via our{" "}
                <Link href="/contact" className="accent underline">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
