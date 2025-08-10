import { getProductById } from "@/app/_lib/data-services";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
  skin_type: string[];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = (await getProductById(productId)) as Product;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#4A071C] mb-4">Product not found</h2>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-[var(--color-rose-gold)] text-white rounded-xl
              font-medium hover:bg-opacity-90 transform hover:-translate-y-0.5 
              transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Shop Button */}
        <Link
          href="/shop"
          className="inline-flex items-center text-[#4A071C] hover:text-[var(--color-rose-gold)] mb-8
            transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-playfair text-[#4A071C] mb-2">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-[var(--color-rose-gold)]">
                ${product.price}
              </p>
            </div>

            {/* Category and Skin Type Tags */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#4A071C] mb-2">
                  Category
                </h3>
                <span className="inline-block px-4 py-2 bg-[var(--color-beige)] text-[var(--color-rose-gold)] rounded-full">
                  {product.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#4A071C] mb-2">
                  Suitable for Skin Types
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.skin_type.map((type, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 py-2 bg-[#FDF4F6] text-[#4A071C] rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-[#4A071C] mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              className="w-full py-4 bg-[var(--color-rose-gold)] text-white rounded-xl
                flex items-center justify-center gap-2 font-medium text-lg
                hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaShoppingBag className="text-xl" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
