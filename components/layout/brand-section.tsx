"use client";

import Image from "next/image";
import Link from "next/link";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

const BrandSection = () => {
    const brands = useInfoStore((state) => state.brands);

    return (
        <div className="grid min-h-80 lg:grid-cols-2">
            <div className="flex items-center justify-center bg-primary p-4 lg:justify-end">
                <h1 className="text-4xl font-bold text-black">
                    Popular Brands
                </h1>
            </div>

            <div className="flex items-center justify-center p-4 lg:justify-start">
                <div className="grid grid-cols-2 gap-4 overflow-hidden sm:grid-cols-3 md:grid-cols-4">
                    {brands.map((brand) => (
                        <Link key={brand.id} href={`/brand/${brand.id}`}>
                            <div className="relative h-10 w-36">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    fill
                                    className="aspect-square object-contain duration-300 ease-in-out hover:scale-110 dark:invert"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandSection;
