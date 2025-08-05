import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  const categoriesData = [
    { name: "Cleansers", image: "/product7.jpg" },
    { name: "Moisturizers", image: "/product9.webp" },
    { name: "Serums", image: "/product10.webp" },
    { name: "Toners", image: "/product1.avif" },
  ];
  return (
    <section className="py-16 px-8 bg-[var(--color-beige)] bg-opacity-30">
      <h2 className="text-4xl font-playfair text-[#4A071C] text-center mb-12">
        Product Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categoriesData.map((category) => (
          <Link
            href={`/category/${category.name.toLowerCase()}`}
            key={category.name}
            className="group block"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-playfair text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-block text-white/80 text-sm transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                    Browse Products →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
