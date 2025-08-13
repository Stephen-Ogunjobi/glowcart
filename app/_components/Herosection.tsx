"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "./useInView";

export default function Herosection() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden section min-h-[80vh] h-[85vh] flex flex-row">
      <div
        className="pointer-events-none absolute -top-24 -left-20 w-[380px] h-[380px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-rose) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-lavender) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className={`w-1/2 relative bg-[var(--color-pink)]/10 px-4 sm:px-8 md:px-16 py-8 md:py-0 flex flex-col justify-center items-start gap-4 md:gap-8 overflow-visible gradient-stroke hero-content-bg will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span aria-hidden className="edge-flare block" />
        {/* Sparkles */}
        <span
          aria-hidden
          className="sparkle sparkle-rose sparkle-animate sm"
          style={{ left: 18, top: 22 }}
        />
        <span
          aria-hidden
          className="sparkle sparkle-lavender sparkle-animate"
          style={{ left: 140, top: 60 }}
        />
        <span
          aria-hidden
          className="sparkle sparkle-rose sparkle-animate lg"
          style={{ left: 80, top: 120 }}
        />
        <h2 className="font-playfair font-bold leading-tight text-5xl sm:text-6xl md:text-7xl glow-text-rose">
          <span className="gradient-text">Glow Starts</span>
          <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl font-bold">
            Here
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-[var(--color-rose-gold)]/90 max-w-lg">
          Your journey to radiant skin begins here. Explore our range of
          skincare products tailored just for you.
        </p>
        <Link
          href="/shop"
          className="btn btn-gradient btn-gradient-dark text-base md:text-lg"
        >
          Shop Now
        </Link>
      </div>

      {/* Visual */}
      <div className="w-1/2 relative h-auto overflow-hidden will-change-transform">
        <Image
          src="/glowcart hero.jpg"
          alt="Glow Starts Here"
          fill
          sizes="(max-width: 768px) 50vw, 40vw"
          className="object-cover object-center zoom-pulse-slow"
          priority
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: "inset 0 -80px 120px -60px rgba(0,0,0,0.12)" }}
        />
      </div>

      {/* Shape divider */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[90px]"
        >
          <path
            d="M0,64 C192,16 384,16 576,48 C768,80 960,80 1152,48 C1248,32 1344,32 1440,48 L1440,120 L0,120 Z"
            fill="var(--bg-body)"
          />
        </svg>
      </div>
    </section>
  );
}
