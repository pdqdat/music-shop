"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

// Hooks
import useCart from "@/hooks/use-cart";

// Icons
import { Loader2 } from "lucide-react";

// Components
import {
    Card,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Currency from "@/components/currency";
import { toast } from "sonner";

const CartSummary = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const items = useCart((state) => state.items);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price * item.quantity);
    }, 0);

    const toCheckout = () => {
        toast.loading("Redirecting to checkout...");

        router.push("/checkout");
    };

    return (
        <Card className="mt-16 rounded-lg border-none bg-accent px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <div className="flex items-baseline justify-between">
                <CardTitle className="text-lg">Subtotal</CardTitle>

                <Currency value={totalPrice} />
            </div>

            <div className="flex items-baseline justify-between">
                <CardTitle className="text-lg">Delivery</CardTitle>

                <p className="">Free</p>
            </div>

            <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between border-t border-accent-foreground pt-4">
                    <div>
                        <CardTitle className="text-lg">Total</CardTitle>

                        <CardDescription>(Inc. VAT & Delivery)</CardDescription>
                    </div>

                    <Currency value={totalPrice} />
                </div>
            </div>

            <Button
                onClick={toCheckout}
                disabled={items.length === 0 || isLoading}
                className="mt-6 w-full"
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Go to Checkout
            </Button>
        </Card>
    );
};

export default CartSummary;
