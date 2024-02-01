import { useState } from "react";
import Link from "next/link";

// Types
import { Product } from "@/types";

// Components
import ProductCard from "@/components/product-card";
import NoResults from "@/components/no-results";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProductListProps {
    title: string;
    items: Product[];
    buttonAction?: string;
}

const ProductList: React.FC<ProductListProps> = ({
    title,
    items,
    buttonAction,
}) => {
    // Control the number of products displayed at a time
    const [displayCount, setDisplayCount] = useState(4);

    // Define a function 'showMore' that increases 'displayCount' by 4 when called
    const showMore = () => {
        setDisplayCount(displayCount + 4);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold">{title}</h3>

                {buttonAction && (
                    <Link href={`${buttonAction}`}>
                        <Button>View all</Button>
                    </Link>
                )}
            </div>

            {items.length === 0 && <NoResults />}

            <Separator />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Show 4 products at a time */}
                {items.slice(0, displayCount).map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>

            <div className="text-center">
                {displayCount < items.length && (
                    <Button variant="outline" onClick={showMore}>
                        Show more
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductList;
