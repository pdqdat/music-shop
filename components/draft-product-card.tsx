"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

// Types
import { Product } from "@/types";

// Components
import { Button } from "@/components/ui/button";

interface DraftProductCard {
    data: Product;
}

const DraftProductCard: React.FC<DraftProductCard> = ({ data }) => {
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
            <CardContent className="flex flex-col justify-between space-y-4 p-3">
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
                            <Button onClick={onPreview}>
                                <Expand size={20} />
                            </Button>

                            <Button onClick={onAddToCart}>
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
                    <p className="text-xl">{data?.price}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default DraftProductCard;
