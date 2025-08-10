"use client";

import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { useCartStore } from "../_store/useCartStore";
import toast from "react-hot-toast";
import { Product } from "./Products";

export default function ProductTile({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="group relative flex flex-col h-full card hover:shadow-2xl transition-all duration-500 hover-float">
      <div className="relative rounded-t-3xl overflow-hidden aspect-[4/3]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
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

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => {
              addToCart(product);
              toast.success(`${product.name} added to cart!`);
            }}
            className="btn btn-primary flex-1"
          >
            <FaShoppingBag className="text-lg" />
            Add to Cart
          </button>
          <Link href={`/shop/${product.id}`} className="btn btn-outline">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
