"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// Hooks
import useCart from "@/hooks/use-cart";

// Types
import { Product } from "@/types";

//Components
import Container from "@/components/container";
import CartItem from "@/components/cart/cart-item";
import CartSummary from "@/components/cart/cart-summary";
import SeduceSection from "@/components/layout/seduce-section";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const [topProducts, setTopProducts] = useState<Product[]>([]);

    useEffect(() => {
        setIsMounted(true);

        axios
            .get("http://localhost:8080/collection/api/get-info")
            .then((response) => {
                setTopProducts(response.data.data.products);
            });
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
                                <p className="h-96 text-muted-foreground">
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

            <SeduceSection items={topProducts.slice(0, 4)} />
        </div>
    );
};

export default CartPage;
