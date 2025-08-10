"use client";

import Image from "next/image";
import { Product } from "./Products";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      key={product.id}
      className="group relative flex flex-col h-full card hover:shadow-2xl transition-all duration-500 hover-float"
    >
      {/* Product Image */}
      <div className="relative rounded-t-3xl overflow-hidden aspect-[4/3]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price chip */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-[var(--color-rose-gold)] font-semibold shadow-sm border border-[var(--border-soft)]">
          ${product.price}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold text-[#4A071C] group-hover:text-[var(--color-rose-gold)] transition-colors duration-300">
            {product.name}
          </h3>

          {/* Tags Container */}
          <div className="flex flex-wrap gap-2">
            {/* Category Tag */}
            <div>
              <span className="inline-block px-3 py-1 text-sm bg-[var(--color-beige)] text-[var(--color-rose-gold)] rounded-full">
                {product.category}
              </span>
            </div>

            {/* Skin Type Tags */}
            <div className="flex flex-wrap gap-2">
              {product.skin_type &&
                product.skin_type.map((skinType, index) => (
                  <div
                    key={index}
                    className="inline-block px-3 py-1 text-sm bg-[#FDF4F6] text-[#4A071C] rounded-full"
                  >
                    {skinType}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Button Group */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => {
              AddToCartBtn({ product });
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
