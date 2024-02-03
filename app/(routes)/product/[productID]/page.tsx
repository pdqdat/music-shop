"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { MouseEventHandler } from "react";

// Constants
import { imagePlaceholder, relatedProducts } from "@/lib/constants";

// Types
import { Product, CartItem } from "@/types";

// Hooks
import { useInfoStore } from "@/hooks/use-info";
import useCart from "@/hooks/use-cart";

// Components
import Container from "@/components/container";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import SeduceSection from "@/components/layout/seduce-section";

const ProductPage = ({ params }: { params: { productID: string } }) => {
    const [product, setProduct] = useState<Product | null>(null);
    const categories = useInfoStore((state) => state.categories);
    const brands = useInfoStore((state) => state.brands);
    const cart = useCart();

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/collection/api/get-info/${params.productID}`,
            )
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProduct(response.data.data);
                }
            });
    }, [params.productID]);

    // Find product category from categories list
    const productCategory = categories.find(
        (category) => category.id == product?.categoryId,
    );
    // Find product brand from brands list
    const productBrand = brands.find((brand) => brand.id == product?.brandId);

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        // Add the quantity property to the product
        const cartItem: CartItem = {
            ...product!,
            quantity: 1,
        };

        cart.addItem(cartItem);
    };

    // TODO: Get related products

    if (!product)
        return (
            <Container>
                <div className="flex flex-col items-center space-y-8 p-24">
                    <h1 className="text-center text-6xl font-bold">
                        404 | Product not found
                    </h1>
                </div>
            </Container>
        );

    return (
        //! Primary breakpoint: LG
        <>
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="block text-2xl font-semibold lg:hidden">
                        {product.name}{" "}
                        <span className="inline rounded-br-lg rounded-tl-lg bg-muted-foreground px-2 py-1 font-semibold text-background lg:hidden">
                            {productBrand?.name}
                        </span>
                    </h1>

                    <h3 className="mt-1 block text-lg text-muted-foreground lg:hidden">
                        {productCategory?.name}
                    </h3>

                    {/* Stock status */}
                    <div className="mt-1 block lg:hidden">
                        {product.stock !== 0 ? (
                            <Badge className="text-base">In stock</Badge>
                        ) : (
                            <Badge className="text-base" variant="destructive">
                                Out of stock
                            </Badge>
                        )}
                    </div>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="md:col-span-7">
                            <div className="relative aspect-square overflow-hidden rounded-xl border">
                                <Image
                                    src={product.imageUrl || imagePlaceholder}
                                    alt="Product image"
                                    fill
                                    className="aspect-square object-contain duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Product info card */}
                        <Card className="relative mt-2 overflow-hidden border-transparent md:col-span-5 lg:mt-0 lg:border-border">
                            {/* Brand name */}
                            <div className="absolute left-0 top-0 hidden rounded-br-lg bg-muted px-2 py-1 font-semibold lg:block">
                                {productBrand?.name}
                            </div>

                            <CardHeader className="mt-4 hidden lg:flex">
                                <CardTitle>{product.name}</CardTitle>

                                <CardDescription className="text-base">
                                    {productCategory?.name}
                                </CardDescription>

                                {/* Stock status */}
                                <div className="mt-1">
                                    {product.stock !== 0 ? (
                                        <Badge className="text-base">
                                            In stock
                                        </Badge>
                                    ) : (
                                        <Badge
                                            className="text-base"
                                            variant="destructive"
                                        >
                                            Out of stock
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="mt-2">
                                <Separator className="mb-2 hidden lg:block" />

                                <Currency value={product.price} />
                            </CardContent>

                            <CardFooter className="flex-col">
                                <Button
                                    className="w-full"
                                    disabled={product.stock === 0}
                                    onClick={onAddToCart}
                                >
                                    Add to cart
                                </Button>
                            </CardFooter>
                        </Card>

                        {/* Product description card */}
                        <div className="mt-2 md:col-span-7">
                            <Card className="border-none shadow-none">
                                <CardHeader>
                                    <CardTitle>Description</CardTitle>
                                </CardHeader>

                                <CardContent className="mt-2">
                                    <p>{product.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>

            <SeduceSection items={relatedProducts} />
        </>
    );
};

export default ProductPage;
