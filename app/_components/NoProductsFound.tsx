"use client";

import { useRouter } from "next/navigation";

export default function NoProductsFound() {
  const router = useRouter();

  const handleReset = () => {
    router.push("/shop");
  };

  return (
    <div className="text-center py-12">
      <h3 className="text-2xl text-[#4A071C] mb-4">
        No products found for the selected filters
      </h3>
      <button onClick={handleReset} className="btn btn-primary">
        Show All Products
      </button>
    </div>
  );
}
