import { create } from "zustand";
import { Product } from "../_components/Products";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  cartCount: number;
  isOpen: boolean;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  toggleCart: () => void;
  clearCart: () => void;
  updateQuantity: (itemId: string, quantity: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  cartCount: 0,
  isOpen: false,
  addToCart: (item: Product) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Update quantity if item exists
        const updatedItems = state.cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return {
          ...state,
          cartItems: updatedItems,
          cartCount: state.cartCount + 1,
        };
      }

      // Add new item with quantity 1
      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        cartCount: state.cartCount + 1,
      };
    }),
  removeFromCart: (itemId: string) =>
    set((state) => {
      const itemToRemove = state.cartItems.find((item) => item.id === itemId);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== itemId),
        cartCount: state.cartCount - (itemToRemove?.quantity || 0),
      };
    }),
  toggleCart: () =>
    set((state) => ({
      ...state,
      isOpen: !state.isOpen,
    })),
  clearCart: () =>
    set((state) => ({
      ...state,
      cartItems: [],
      cartCount: 0,
    })),
  updateQuantity: (itemId: string, quantity: number) =>
    set((state) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
      return {
        ...state,
        cartItems: updatedItems,
        cartCount: updatedItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
    }),
}));
