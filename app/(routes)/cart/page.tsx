"use client";

import { useEffect, useState } from "react";

// Hooks
import useCart from "@/hooks/use-cart";

//Components
import Container from "@/components/container";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div>
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold ">Shopping Cart</h1>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && (
                                <p className="text-muted-foreground">
                                    Your cart is currently empty.
                                </p>
                            )}

                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>

                        <CartSummary />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
