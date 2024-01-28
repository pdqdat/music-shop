"use client";

import { useEffect, useState } from "react";
import axios from "axios";

// Hooks
import useCart from "@/hooks/use-cart";
import useCheckoutData from "@/hooks/use-checkout";

//Components
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();
    const { fullName, email, phoneNumber, address } = useCheckoutData();

    const paymentMethod = "Momo";

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const handleClick = () => {
        const orderInfo = {
            fullName,
            email,
            phoneNumber,
            address,
            items: cart.items,
            paymentMethod,
        };
        console.log(orderInfo);

        // axios
        //     .post("http://172.16.1.179:8080/payment", orderInfo)
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch(() => {
        //         toast.error("Something went wrong! Please try again.");
        //     });
    };

    return (
        <div>
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold ">Payment</h1>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            <Button onClick={handleClick}>Pay</Button>
                        </div>

                        <div className="mt-16 rounded-lg bg-accent px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;