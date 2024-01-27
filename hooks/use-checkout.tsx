import { create } from "zustand";

interface CheckoutStore {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
    setCheckoutData: (
        fullName: string,
        email: string,
        phoneNumber: string,
        address: string,
    ) => void;
}

export const useCheckout = create<CheckoutStore>((set) => ({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    setCheckoutData: (fullName, email, phoneNumber, address) => {
        set({ fullName, email, phoneNumber, address });
    },
}));
