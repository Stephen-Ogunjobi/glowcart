import { notFound } from "next/navigation";
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
export async function getAllProducts() {
  const { data: allProducts, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return allProducts;
}

export async function getProductById(productId: string) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();

  if (error) {
    throw new Error("Product could not be loaded");
  }

  return product;
}

export async function getProductByCategory(category: string) {
  // Use case-insensitive substring match to be resilient to pluralization/spacing
  const pattern = `%${category}%`;
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .ilike("category", pattern);

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return products;
}
export async function getBlog(id: number) {
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return blog;
}
