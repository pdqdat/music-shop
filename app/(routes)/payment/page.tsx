"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Hooks
import useCart from "@/hooks/use-cart";
import useCheckoutData from "@/hooks/use-checkout";

// Icons
import { Loader2, ChevronLeft } from "lucide-react";

//Components
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FundiinForm } from "@/components/form/fundiin-form";

export const revalidate = 0;

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    

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
                    <h1 className="text-3xl font-bold ">Summary and Payment</h1>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-7">
                            <Tabs defaultValue="fundiin" className="">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="card">
                                        Credit card
                                    </TabsTrigger>
                                    <TabsTrigger value="fundiin">
                                        Fundiin
                                    </TabsTrigger>
                                    <TabsTrigger value="momo">Momo</TabsTrigger>
                                </TabsList>

                                <TabsContent value="card">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>
                                                Creadit card
                                            </CardTitle>

                                            <CardDescription>
                                                This payment method will be
                                                available soon
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-2">
                                            <div className="space-y-1">
                                                <Label htmlFor="cardNumber">
                                                    Card number
                                                </Label>

                                                <Input
                                                    id="cardNumber"
                                                    autoFocus
                                                    placeholder="1234 1234 1234 1234"
                                                    disabled
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <Label htmlFor="expiration">
                                                    Expiration
                                                </Label>

                                                <Input
                                                    id="expiration"
                                                    placeholder="MM / YY"
                                                    disabled
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <Label htmlFor="cvc">CVC</Label>

                                                <Input
                                                    id="cvc"
                                                    placeholder="CVC"
                                                    disabled
                                                />
                                            </div>
                                        </CardContent>

                                        <CardFooter>
                                            <Button className="w-full" disabled>
                                                Place my Order
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="fundiin">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Fundiin</CardTitle>

                                            <CardDescription>
                                                Pay later with Fundiin
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-2">
                                            <FundiinForm />
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="momo">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Momo</CardTitle>

                                            <CardDescription>
                                                This payment method will be
                                                available soon
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-2"></CardContent>

                                        <CardFooter>
                                            <Button className="w-full" disabled>
                                                Place my Order
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>

                            <div className="mt-4">
                                <Link href="/checkout">
                                    <Button variant="secondary">
                                        <ChevronLeft className="mr-1" />
                                        Back to Checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-16 rounded-lg bg-accent px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;
