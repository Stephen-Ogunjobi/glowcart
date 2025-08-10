"use client";
import { useCartStore } from "../_store/useCartStore";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Product } from "./Products";

export default function AddToCartBtn({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <button
      onClick={() => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
      }}
      className="btn btn-primary"
    >
      <FaShoppingBag className="text-base" />
      <span>Add to Cart</span>
    </button>
  );
}
