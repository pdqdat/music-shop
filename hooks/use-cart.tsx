import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Types
import { CartItem } from "@/types";

// Components
import { toast } from "sonner";

interface CartStore {
    items: CartItem[];
    addItem: (data: CartItem) => void;
    removeItem: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: CartItem) => {
                const currentItems = get().items;
                const existingItem = currentItems.find(
                    (item) => item.id === data.id,
                );

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.id === data.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item,
                        ),
                    });
                } else {
                    set({ items: [...currentItems, { ...data, quantity: 1 }] });
                }

                toast.success("Item added to cart.");
            },

            removeItem: (id: string) => {
                set({
                    items: [...get().items.filter((item) => item.id !== id)],
                });

                toast("Item removed from cart.");
            },

            increaseQuantity: (id: string) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    ),
                }));

                toast.success("Item quantity updated.");
            },

            decreaseQuantity: (id: string) => {
                set((state) => ({
                    items: state.items.map((item) =>
                        item.id === id && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item,
                    ),
                }));

                toast("Item quantity updated.");
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
