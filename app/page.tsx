import Categories from "./_components/Categories";
import FeaturedProducts from "./_components/FeaturedProducts";
import Herosection from "./_components/Herosection";
import Reviews from "./_components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to GlowCart - Your ultimate destination for premium skincare products. Discover featured products, explore categories, and read customer reviews.",
};

export default function Home() {
  return (
    <div>
      <Herosection />
      <FeaturedProducts />
      <Categories />
      <Reviews />
    </div>
  );
}
