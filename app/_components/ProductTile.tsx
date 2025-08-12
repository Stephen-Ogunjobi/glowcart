"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../_store/useCartStore";
import { Product } from "./Products";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductTile({ product }: { product: Product }) {
  // Accessing store keeps component consistent with others if needed later
  useCartStore();

  return (
    <div className="group relative flex flex-col h-full card hover:shadow-2xl transition-shadow duration-500">
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <button
          aria-label="Add to wishlist"
          className="favorite-btn"
          title="Add to wishlist"
        >
          ♥
        </button>

        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-[var(--color-rose-gold)] font-semibold shadow-sm border border-[var(--border-soft)]">
          ${product.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold text-[#4A071C] group-hover:text-[var(--color-rose-gold)] transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 text-sm bg-[var(--color-beige)] text-[var(--color-rose-gold)] rounded-full">
              {product.category}
            </span>
            {product.skin_type?.map((skinType, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm bg-[#FDF4F6] text-[#4A071C] rounded-full"
              >
                {skinType}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex gap-3 mt-4">
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
