"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

// Icons
import { Expand, ShoppingCart } from "lucide-react";

// Types
import { Product } from "@/types";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import Currency from "@/components/currency";

interface ProductCard {
    data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
    };

    return (
        <Card onClick={handleClick}>
            <CardContent className="group cursor-pointer space-y-4 p-3">
                {/* Image & actions */}
                <div className="relative aspect-square overflow-hidden rounded-lg border">
                    <Image
                        src={data.images?.[0]?.url}
                        alt="Product image"
                        fill
                        className="aspect-square rounded-lg object-cover duration-300 ease-in-out group-hover:scale-110"
                    />

                    <div className="absolute bottom-5 w-full px-6 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                        <div className="flex justify-center gap-x-6">
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
                            >
                                <ShoppingCart size={20} />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="line-clamp-3 text-lg font-semibold">
                        {data.name}
                    </p>

                    <p className="text-sm text-gray-700 dark:text-gray-500">
                        {data.department?.name}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <Currency value={data?.price} />
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
