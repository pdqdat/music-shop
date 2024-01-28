import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CheckoutDataStore {
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

const useCheckoutData = create(
    persist<CheckoutDataStore>(
        (set, get) => ({
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",

            setCheckoutData: (
                fullName: string,
                email: string,
                phoneNumber: string,
                address: string,
            ) => {
                set({ fullName, email, phoneNumber, address });
            },

            clearCheckoutData: () => {
                set({ fullName: "", email: "", phoneNumber: "", address: "" });
            },
        }),
        {
            name: "dc-music-checkout-data",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useCheckoutData;
