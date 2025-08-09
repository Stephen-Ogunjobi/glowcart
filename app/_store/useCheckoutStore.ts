import { create } from "zustand";

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

interface CheckoutStore {
  shippingInfo: ShippingInfo | null;
  setShippingInfo: (info: ShippingInfo) => void;
  clearShippingInfo: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  shippingInfo: null,
  setShippingInfo: (info) => set({ shippingInfo: info }),
  clearShippingInfo: () => set({ shippingInfo: null }),
}));
