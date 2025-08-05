import React from "react";
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="flex h-[90vh] bg-gradient-to-r from-[var(--color-beige)] to-[var(--color-offwhite)]">
      <div className="w-[60%] bg-[var(--color-pink)] bg-opacity-10 p-16 flex flex-col justify-center items-start space-y-8">
        <h2 className="text-6xl font-playfair text-[#4A071C] leading-tight font-bold text-shadow-sm">
          Glow Starts{" "}
          <span className="text-7xl block mt-2 font-bold">Here</span>
        </h2>
        <p className="text-xl text-[var(--color-rose-gold)] opacity-80 max-w-lg">
          Your journey to radiant skin begins here. Explore our range of
          skincare products tailored just for you.
        </p>
        <button
          className="px-8 py-4 bg-[var(--color-rose-gold)] text-white rounded-full text-lg font-semibold 
          hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Shop Now
        </button>
      </div>
      <div className="w-[40%] relative overflow-hidden">
        <Image
          src="/glowcart hero.jpg"
          alt="Glow Starts Here"
          fill
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
        />
      </div>
    </section>
  );
}
