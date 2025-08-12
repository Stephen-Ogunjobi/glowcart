"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../_store/useCartStore";
import { Product } from "./Products";
import AddToCartBtn from "./AddToCartBtn";
import { useInView } from "./useInView";

export default function ProductTile({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  // Accessing store keeps component consistent with others if needed later
  useCartStore();
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col h-full card hover:shadow-2xl will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${Math.min(index, 10) * 60}ms` }}
    >
      <div className="relative h-52 overflow-hidden rounded-t-2xl">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-[var(--color-rose-gold)] font-semibold shadow-sm border border-[var(--border-soft)]">
          ${product.price}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1 space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-[#4A071C] group-hover:text-[var(--color-rose-gold)] transition-colors duration-300">
            {product.name}
          </h3>

          {/* Category pill */}
          <div>
            <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-[var(--color-beige)] text-[var(--color-rose-gold)] rounded-full">
              {product.category}
            </span>
          </div>

          {/* Skin types in their own block */}
          {product.skin_type && product.skin_type.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {product.skin_type.map((skinType, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-1 text-xs sm:text-sm bg-[#FDF4F6] text-[#4A071C] rounded-full"
                >
                  {skinType}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative z-10 flex gap-2 mt-3">
          <div className="flex-1">
            <AddToCartBtn product={product} />
          </div>
          <Link href={`/shop/${product.id}`} className="btn btn-outline">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
