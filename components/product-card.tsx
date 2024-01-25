"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

// Icons
import { Expand, ShoppingCart } from "lucide-react";

// Types
import { Product, CartItem } from "@/types";

// Constants
import { campaigns } from "@/lib/constants";

// Hooks
import useCart from "@/hooks/use-cart";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import Currency from "@/components/currency";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const router = useRouter();
    const cart = useCart();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        // Add the quantity property to the product
        const cartItem: CartItem = {
            ...data,
            quantity: 1,
        };

        cart.addItem(cartItem);
    };

    // Find the January Sale campaign
    const januarySaleCampaign = campaigns.find(
        (campaign) => campaign.id === "1",
    );

    // Check if the product is in the January Sale campaign
    const isInJanuarySale = januarySaleCampaign?.productID.includes(data.id);

    return (
        <Card
            onClick={handleClick}
            className="group relative flex flex-col justify-between duration-300 ease-in-out hover:shadow-lg"
        >
            <CardContent className="space-y-4 p-3">
                {/* Image & actions */}
                <div className="relative aspect-square overflow-hidden rounded-xl border">
                    {/* Campaign tag */}
                    {isInJanuarySale && (
                        <div className="absolute -right-12 -top-12 z-20 flex aspect-square w-24 rotate-45 items-end justify-center bg-primary text-sm font-medium text-black">
                            Jan Sale
                        </div>
                    )}

                    <Image
                        src={data.images?.[0]}
                        alt="Product image"
                        fill
                        className="aspect-square rounded-lg object-contain duration-300 ease-in-out group-hover:scale-110"
                    />

                    {/* Actions */}
                    <div className="absolute bottom-5 w-full px-6 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                        <div className="flex justify-center gap-x-6">
                            {/* TODO: Preview dialog */}
                            <Button
                                onClick={onPreview}
                                variant="secondary"
                                size="icon"
                            >
                                <Expand size={20} />
                            </Button>

                            <Button
                                onClick={onAddToCart}
                                size="icon"
                                className="hover:scale-110"
                                disabled={data.stock === 0}
                            >
                                <ShoppingCart size={20} />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                    <p className="line-clamp-3 text-lg font-semibold">
                        {data.name}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-500">
                        {data.department?.name}
                    </p>
                </div>
            </CardContent>

            {/* Price */}
            <CardFooter className="flex-col p-3">
                {data?.stock !== 0 ? (
                    <Badge className="mb-2 text-sm">In stock</Badge>
                ) : (
                    <Badge className="mb-2 text-sm" variant="destructive">
                        Out of stock
                    </Badge>
                )}

                <div className="flex w-full items-center justify-between border-t pt-2">
                    <Currency value={data?.price} className="text-lg" />

                    {/* Pre-sale price */}
                    {isInJanuarySale && (
                        <Currency
                            value={data?.price + 100}
                            className="text-lg text-muted-foreground line-through"
                        />
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
