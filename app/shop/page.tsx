import Banner from "../_components/Banner";
import Products from "../_components/Products";

export default function page() {
  return (
    <div>
      <Banner image="/shop-subhero.jpg" name="Shop" />
      <Products />
    </div>
  );
}
