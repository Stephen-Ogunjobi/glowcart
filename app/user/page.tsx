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
          You are browsing as a guest. This is a demo experience, so
          there&apos;s no sign-in or account creation.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-[var(--color-pink)]/10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-rose-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-rose-gold)]/20 to-[var(--color-pink)]/30 rounded-2xl blur-sm"></div>
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-pink)]/60 to-[var(--color-rose-gold)]/20 text-[#4A071C] backdrop-blur-sm">
                    <FaUser className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4A071C] mb-1">
                    Guest Profile
                  </h2>
                  <p className="text-sm text-[var(--color-rose-gold)]/70 font-medium">
                    Limited demo access
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/80 border border-[var(--color-pink)]/20">
                  <span className="text-sm font-medium text-[var(--color-rose-gold)]/70">
                    Name
                  </span>
                  <span className="font-semibold text-[#4A071C] px-3 py-1 rounded-full bg-[var(--color-pink)]/30">
                    Guest
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/80 border border-[var(--color-pink)]/20">
                  <span className="text-sm font-medium text-[var(--color-rose-gold)]/70">
                    Email
                  </span>
                  <span className="font-semibold text-[#4A071C]">—</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/80 border border-[var(--color-pink)]/20">
                  <span className="text-sm font-medium text-[var(--color-rose-gold)]/70">
                    Status
                  </span>
                  <span className="font-semibold text-[#4A071C] text-xs px-3 py-1 rounded-full bg-[var(--color-pink)]/40">
                    Guest (no account)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Orders & Cart */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-[var(--color-beige)]/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-rose-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-rose-gold)]/20 to-[var(--color-beige)]/30 rounded-2xl blur-sm"></div>
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-beige)]/60 to-[var(--color-rose-gold)]/20 text-[#4A071C] backdrop-blur-sm">
                    <FaShoppingBag className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4A071C] mb-1">
                    Orders & Cart
                  </h2>
                  <p className="text-sm text-[var(--color-rose-gold)]/70 font-medium">
                    Demo-only behavior
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/60">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-rose-gold)] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-[#4A071C]/80">
                    Orders are not saved to an account in demo mode.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/60">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-rose-gold)] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-[#4A071C]/80">
                    Your cart works locally during your session.
                  </p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/60">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-rose-gold)] mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-[#4A071C]/80">
                    Checkout flow is simulated for demonstration.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="flex-1 min-w-[140px] px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--color-rose-gold)] to-[#4A071C] !text-white font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/cart"
                  className="flex-1 min-w-[100px] px-6 py-3 rounded-2xl border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] font-semibold hover:bg-gradient-to-r hover:from-[var(--color-pink)]/20 hover:to-[var(--color-beige)]/20 hover:scale-105 transition-all duration-300 text-center backdrop-blur-sm"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>

          {/* About Demo */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white via-white to-[var(--color-offwhite)] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-rose-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8">
              <div className="flex items-center space-x-5 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-rose-gold)]/20 to-[var(--color-offwhite)]/50 rounded-2xl blur-sm"></div>
                  <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-offwhite)] to-[var(--color-rose-gold)]/20 text-[#4A071C] backdrop-blur-sm">
                    <FaInfoCircle className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4A071C] mb-1">
                    About this demo
                  </h2>
                  <p className="text-sm text-[var(--color-rose-gold)]/70 font-medium">
                    What&apos;s included
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[var(--color-offwhite)] to-white/80 border border-[var(--color-pink)]/20">
                  <p className="text-sm text-[#4A071C]/80 leading-relaxed">
                    Authentication, saved addresses, and order history are
                    disabled in this demo. In a real app, you would be able to
                    create an account, track orders, and manage your profile
                    here.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[var(--color-pink)]/10 to-[var(--color-beige)]/10 border border-[var(--color-rose-gold)]/20">
                  <p className="text-sm text-[#4A071C]/80 leading-relaxed">
                    Need help or feedback? Reach out via our{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-[var(--color-rose-gold)] hover:text-[#4A071C] underline decoration-[var(--color-rose-gold)]/30 hover:decoration-[#4A071C] transition-colors"
                    >
                      Contact page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
