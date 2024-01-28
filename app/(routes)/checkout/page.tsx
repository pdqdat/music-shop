"use client";

import { useEffect, useState } from "react";

// Hooks
import useCart from "@/hooks/use-cart";

//Components
import Container from "@/components/container";
import SmallCartItem from "@/components/cart/small-cart-item";
import { CheckoutForm } from "@/components/form/checkout-form";

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
                    <h1 className="text-3xl font-bold ">Checkout</h1>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            <CheckoutForm />
                        </div>

                        <div className="mt-16 rounded-lg bg-accent px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                            {cart.items.length === 0 && (
                                <p>Your cart is currently empty.</p>
                            )}

                            <ul>
                                {cart.items.map((item) => (
                                    <SmallCartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
