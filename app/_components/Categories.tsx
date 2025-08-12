"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "./useInView";

export default function Categories() {
  const categoriesData = [
    { name: "Cleansers", image: "/product7.jpg" },
    { name: "Moisturizers", image: "/product9.webp" },
    { name: "Serums", image: "/product10.webp" },
    { name: "Toners", image: "/product1.avif" },
  ];
  return (
    <section className="section py-16 px-8">
      <h2 className="text-4xl font-playfair text-[#4A071C] text-center mb-12">
        Product Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categoriesData.map((category, index) => (
          <Reveal key={category.name} index={index}>
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden card hover-tilt gradient-stroke">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-playfair font-bold text-white drop-shadow mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block text-white/90 text-sm translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    Browse Products →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Reveal({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${Math.min(index, 10) * 70}ms` }}
    >
      {children}
    </div>
  );
}
