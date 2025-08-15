import Banner from "../_components/Banner";
import Products from "../_components/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse our complete collection of premium skincare products. Filter by category, price, and more to find the perfect products for your skin.",
};

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
