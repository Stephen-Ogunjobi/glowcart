import { getAllProducts } from "../_lib/data-services";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
  skin_type: string[];
}

export default async function Products() {
  const products = (await getAllProducts()) as Product[];

  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 rounded-t-2xl overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col h-[240px]">
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-[#4A071C] group-hover:text-[var(--color-rose-gold)] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-[var(--color-rose-gold)]">
                      ${product.price}
                    </span>
                  </div>

                  {/* Tags Container */}
                  <div className="flex flex-col flex-wrap gap-2">
                    {/* Category Tag */}
                    <div>
                      <span className="inline-block px-3 py-1 text-sm bg-[var(--color-beige)] text-[var(--color-rose-gold)] rounded-full">
                        {product.category}
                      </span>
                    </div>

                    {/* Skin Type Tags */}
                    <div>
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
                <div className="flex gap-3 mt-auto">
                  <button
                    className="flex-1 py-3 px-4 bg-[var(--color-rose-gold)] text-white rounded-xl
                      flex items-center justify-center gap-2 font-medium
                      hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FaShoppingBag className="text-lg" />
                    Add to Cart
                  </button>
                  <a
                    href={`/product/${product.id}`}
                    className="px-4 py-3 border-2 border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] rounded-xl
                      flex items-center justify-center font-medium
                       hover:text-white transform hover:-translate-y-0.5 
                      transition-all duration-300"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
