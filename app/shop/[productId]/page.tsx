import AddToCartBtn from "@/app/_components/AddToCartBtn";
import { getProductById } from "@/app/_lib/data-services";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { MdLocalShipping, MdVerified } from "react-icons/md";

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
      <div className="min-h-screen flex items-center justify-center section px-6">
        <div className="text-center">
          <h2 className="text-2xl text-[#4A071C] mb-4">Product not found</h2>
          <Link
            href="/shop"
            className="btn btn-primary inline-flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back to Shop Button */}
        <Link href="/shop" className="navlink inline-flex items-center mb-6">
          <FaArrowLeft className="mr-2" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="relative h-[460px] md:h-[520px] rounded-2xl overflow-hidden slide-in-ltr">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center zoom-pulse-slow"
              priority
            />
            <div className="image-overlay" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6 slide-in-rtl">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair glow-text-rose">
                {product.name}
              </h1>
              <p className="text-3xl font-extrabold gradient-text">
                ${product.price}
              </p>
            </div>

            {/* Category and Skin Type Tags */}
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-[#4A071C] mb-2">
                  Category
                </h3>
                <span className="pill">{product.category}</span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#4A071C] mb-2">
                  Suitable for Skin Types
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.skin_type.map((type, index) => (
                    <span
                      key={index}
                      className="pill bg-[#FDF4F6] text-[#4A071C] border-0"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card elevated p-6">
              <h3 className="text-lg font-semibold text-[#4A071C] mb-2">
                Description
              </h3>
              <p className="text-[#4A071C]/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Add to Cart + trust badges */}
            <div className="flex items-center gap-4">
              <AddToCartBtn product={product} />
              <div className="hidden md:flex items-center gap-4 text-[var(--color-rose-gold)]">
                <span className="inline-flex items-center gap-2 text-sm">
                  <MdLocalShipping /> Free shipping over $50
                </span>
                <span className="inline-flex items-center gap-2 text-sm">
                  <MdVerified /> 30-day returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA for mobile */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] card elevated p-3 flex items-center justify-between z-40">
        <span className="font-bold text-[#4A071C]">${product.price}</span>
        <AddToCartBtn product={product} />
      </div>
    </section>
  );
}
