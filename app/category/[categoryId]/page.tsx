import ProductTile from "@/app/_components/ProductTile";
import { getProductByCategory } from "@/app/_lib/data-services";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
  skin_type: string[];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;
  let products: Product[] = [];
  try {
    products = (await getProductByCategory(
      categoryId.toLowerCase()
    )) as Product[];
  } catch {
    products = [];
  }

  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#4A071C] mb-4">Products not found</h2>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[var(--color-rose-gold)] text-white rounded-xl
              font-medium hover:bg-opacity-90 transform hover:-translate-y-0.5 
              transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-playfair text-[#4A071C]">
            {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
          </h1>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-lg border border-[var(--color-rose-gold)] text-[var(--color-rose-gold)] hover:bg-[var(--color-rose-gold)] hover:!text-white transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 [grid-auto-rows:1fr]">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
