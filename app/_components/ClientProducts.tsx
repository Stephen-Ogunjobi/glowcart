"use client";

// removed unused imports after refactor
import FilterProducts from "./FilterProducts";
import NoProductsFound from "./NoProductsFound";
import { Product } from "./Products";
import ProductTile from "./ProductTile";

export default function ClientProducts({
  products,
  searchParams,
}: {
  products: Product[];
  searchParams: { categorySort?: string; skinTypeSort?: string };
}) {
  const categoryFilter = searchParams.categorySort;
  const skinTypeFilter = searchParams.skinTypeSort;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !categoryFilter ||
      categoryFilter === "all" ||
      product.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesSkinType =
      !skinTypeFilter ||
      skinTypeFilter === "all" ||
      product.skin_type.some(
        (type) => type.toLowerCase() === skinTypeFilter.toLowerCase()
      );
    return matchesCategory && matchesSkinType;
  });

  return (
    <section className="section py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-playfair text-[#4A071C] text-center mb-8">
          All Products
        </h2>

        <FilterProducts
          categories={Array.from(new Set(products.map((p) => p.category)))}
          skinTypes={Array.from(new Set(products.flatMap((p) => p.skin_type)))}
        />

        {filteredProducts.length === 0 ? (
          <NoProductsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 [grid-auto-rows:1fr]">
            {filteredProducts.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
