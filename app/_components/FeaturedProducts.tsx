import { getProducts } from "../_lib/data-services";
import FeaturedProductsClient from "./FeaturedProductsClient";

export default async function FeaturedProducts() {
  const products = await getProducts(3);

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12 text-[var(--color-rose-gold)]">
        No featured products available at the moment.
      </div>
    );
  }

  return <FeaturedProductsClient products={products} />;
}
