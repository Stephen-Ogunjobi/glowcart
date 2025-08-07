"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ProductFilters({
  categories,
  skinTypes,
}: {
  categories: string[];
  skinTypes: string[];
}) {
  const searchParams = useSearchParams();
  const activeSortCategory = searchParams.get("categorySort");
  const activeSortSkinType = searchParams.get("skinTypeSort");
  const router = useRouter();

  function handleCategoryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (category === "all") {
      params.delete("categorySort");
    } else {
      params.set("categorySort", category);
    }
    router.push(`?${params.toString()}`);
  }

  function handleSkinTypeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const skinType = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (skinType === "all") {
      params.delete("skinTypeSort");
    } else {
      params.set("skinTypeSort", skinType);
    }
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
      <div className="relative min-w-[200px]">
        <select
          className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-rose-gold)] 
            text-[#4A071C] bg-white appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)] focus:ring-opacity-50"
          value={activeSortCategory || ""}
          onChange={(e) => handleCategoryChange(e)}
        >
          <option value="" disabled>
            Filter by Category
          </option>
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-[var(--color-rose-gold)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="relative min-w-[200px]">
        <select
          className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-rose-gold)] 
            text-[#4A071C] bg-white appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-[var(--color-rose-gold)] focus:ring-opacity-50"
          value={activeSortSkinType || ""}
          onChange={(e) => handleSkinTypeChange(e)}
        >
          <option value="" disabled>
            Filter by Skin Type
          </option>
          <option value="all">All Skin Types</option>
          {skinTypes.map((skinType) => (
            <option key={skinType} value={skinType}>
              {skinType.charAt(0).toUpperCase() + skinType.slice(1)}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-[var(--color-rose-gold)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
