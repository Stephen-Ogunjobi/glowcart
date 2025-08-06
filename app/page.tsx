import Categories from "./_components/Categories";
import FeaturedProducts from "./_components/FeaturedProducts";
import Herosection from "./_components/Herosection";
import Reviews from "./_components/Reviews";

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
