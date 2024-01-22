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
import { Card, CardContent, CardFooter } from "./ui/card";
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
        <Card
            onClick={handleClick}
            className="group relative flex flex-col justify-between duration-300 ease-in-out hover:shadow-lg"
        >
            <CardContent className="space-y-4 p-3">
                {/* Image & actions */}
                <div className="relative aspect-square overflow-hidden rounded-xl border">
                    <Image
                        src={data.images?.[0]}
                        alt="Product image"
                        fill
                        className="aspect-square rounded-lg object-contain duration-300 ease-in-out group-hover:scale-110"
                    />

                    {/* Actions */}
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
            <CardFooter className="flex items-center justify-between p-3">
                <Currency value={data?.price} />
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
