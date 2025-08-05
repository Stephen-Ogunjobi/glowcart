import { supabase } from "./supabase";

export async function getProducts(limit: number = 3) {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .limit(limit);

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return products;
}
