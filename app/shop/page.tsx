import Banner from "../_components/Banner";
import Products from "../_components/Products";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <Banner image="/shop-subhero.jpg" name="Shop" />
      <Products searchParams={searchParams} />
    </div>
  );
}
