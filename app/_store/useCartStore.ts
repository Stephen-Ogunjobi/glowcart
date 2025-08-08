import { create } from "zustand";
import { Product } from "../_components/Products";

interface CartStore {
  cartItems: Product[];
  cartCount: number;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  cartCount: 0,
  addToCart: (item: Product) =>
    set((state) => {
      const newState = {
        cartItems: [...state.cartItems, item],
        cartCount: state.cartCount + 1,
      };
      return newState;
    }),
  removeFromCart: (itemId: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
      cartCount: state.cartCount - 1,
    })),
}));
