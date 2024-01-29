import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CheckoutDataStore {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    city: string;
    district: string;
    ward: string;
    address: string;
    setCheckoutData: (
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        city: string,
        district: string,
        ward: string,
        address: string,
    ) => void;
}

const useCheckoutData = create(
    persist<CheckoutDataStore>(
        (set, get) => ({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            city: "",
            district: "",
            ward: "",
            address: "",

            setCheckoutData: (
                firstName: string,
                lastName: string,
                email: string,
                phoneNumber: string,
                city: string,
                district: string,
                ward: string,
                address: string,
            ) => {
                set({
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    city,
                    district,
                    ward,
                    address,
                });
            },

            clearCheckoutData: () => {
                set({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    city: "",
                    district: "",
                    ward: "",
                    address: "",
                });
            },
        }),
        {
            name: "dc-music-checkout-data",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useCheckoutData;
