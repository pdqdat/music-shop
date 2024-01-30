import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Types
import { Brand, Category } from "@/types";

type InfoStore = {
    categories: Category[];
    brands: Brand[];

    setCategories: (categories: Category[]) => void;
    setBrands: (brands: Brand[]) => void;
};

export const useInfoStore = create(
    persist<InfoStore>(
        (set, get) => ({
            categories: [],
            brands: [],

            setCategories: (categories) => set({ categories }),
            setBrands: (brands) => set({ brands }),
        }),
        {
            name: "dc-music-info",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
