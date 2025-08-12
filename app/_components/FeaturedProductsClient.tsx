"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";
import { useInView } from "./useInView";
import type { Product } from "./Products";

export default function FeaturedProductsClient({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="py-16 px-8 section pattern-dots">
      <h2 className="text-4xl font-playfair text-[#4A071C] text-center mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <ZoomCard key={product.id} index={index}>
            <div className="card overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#4A071C] mb-2">
                  {product.name}
                </h3>
                <p className="text-[var(--color-rose-gold)] opacity-80 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[var(--color-rose-gold)]">
                    ${product.price}
                  </span>
                  <AddToCartBtn product={product} />
                </div>
              </div>
            </div>
          </ZoomCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/shop" className="btn btn-outline text-lg">
          View All Products
        </Link>
      </div>
    </section>
  );
}

function ZoomCard({
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
        isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${Math.min(index, 10) * 80}ms` }}
    >
      {children}
    </div>
  );
}
