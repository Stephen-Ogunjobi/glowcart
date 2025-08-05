import { getProducts } from "../_lib/data-services";
import Image from "next/image";

export default async function FeaturedProducts() {
  const products = await getProducts(3);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-[var(--color-rose-gold)]">
        No featured products available at the moment.
      </div>
    );
  }

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-playfair text-[#4A071C] text-center mb-12">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
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
                <button
                  className="px-4 py-2 bg-[var(--color-rose-gold)] text-white rounded-full 
                  hover:bg-opacity-90 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
