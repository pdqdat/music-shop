"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

// Types
import { Product } from "@/types";

// Components
import { Button } from "@/components/ui/button";

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
        <div
            onClick={handleClick}
            className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
        >
            {/* Image & actions */}
            <div className="relative aspect-square rounded-xl bg-gray-100">
                <Image
                    src={data.images?.[0]?.url}
                    alt=""
                    fill
                    className="aspect-square rounded-md object-cover"
                />
                <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
                    <div className="flex justify-center gap-x-6">
                        <Button onClick={onPreview}>
                            <Expand size={20} className="text-gray-600" />
                        </Button>
                        <Button onClick={onAddToCart}>
                            <ShoppingCart size={20} className="text-gray-600" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-sm text-gray-500">{data.department?.name}</p>
            </div>

            {/* Price & Review */}
            <div className="flex items-center justify-between">
                <p className="text-xl">{data?.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
