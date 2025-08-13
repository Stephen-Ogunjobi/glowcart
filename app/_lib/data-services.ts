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

export async function getBlogs(limit?: number) {
  let query = supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });
  if (limit && Number.isFinite(limit)) query = query.limit(limit);

  const { data: blogs, error } = await query;
  if (error) {
    throw new Error("Blogs could not be loaded");
  }

  return blogs;
}

export async function getBlogBySlug(slug: string) {
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    notFound();
  }

  return blog;
}
