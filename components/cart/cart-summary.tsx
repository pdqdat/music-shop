"use client";

import * as React from "react";
import axios from "axios";

// Hooks
import useCart from "@/hooks/use-cart";

// Icons
import { Loader2 } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import Currency from "@/components/currency";
import { toast } from "sonner";

const CartSummary = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const items = useCart((state) => state.items);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success("Checkout successful!");
        }, 3000);
    };

    return (
        <div className="mt-16 rounded-lg bg-accent px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium">Order summary</h2>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-accent-foreground pt-4">
                    <div className="text-base font-medium">Order total</div>

                    <Currency value={totalPrice} />
                </div>
            </div>

            <Button
                onClick={onCheckout}
                disabled={items.length === 0 || isLoading}
                className="mt-6 w-full"
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Go to Checkout
            </Button>
        </div>
    );
};

export default CartSummary;
