import Categories from "./_components/Categories";
import FeaturedProducts from "./_components/FeaturedProducts";
import Herosection from "./_components/Herosection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}
