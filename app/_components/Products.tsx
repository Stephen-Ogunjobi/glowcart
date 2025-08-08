import { getAllProducts } from "../_lib/data-services";
import ClientProducts from "./ClientProducts";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image_url: string;
  description: string;
  skin_type: string[];
}

export default async function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const products = (await getAllProducts()) as Product[];
  const parsedSearchParams = {
    categorySort:
      typeof searchParams.categorySort === "string"
        ? searchParams.categorySort
        : undefined,
    skinTypeSort:
      typeof searchParams.skinTypeSort === "string"
        ? searchParams.skinTypeSort
        : undefined,
  };

  return (
    <ClientProducts products={products} searchParams={parsedSearchParams} />
  );
}
