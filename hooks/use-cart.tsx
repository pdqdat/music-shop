import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Types
import { Product } from "@/types";

// Components
import { toast } from "sonner";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find(
                    (item) => item.id === data.id,
                );

                if (existingItem) {
                    return toast("Item already in cart.");
                }

                set({ items: [...get().items, data] });
                toast.success("Item added to cart.");
            },

            removeItem: (id: string) => {
                set({
                    items: [...get().items.filter((item) => item.id !== id)],
                });
                toast.success("Item removed from cart.");
            },
            
            removeAll: () => set({ items: [] }),
        }),
        {
            name: "dc-music-cart",
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useCart;
