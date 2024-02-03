"use client";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";

// Types
import { Product } from "@/types";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

// Icons
import { SlidersHorizontal } from "lucide-react";

// Components
import Container from "@/components/container";
import HeadingSection from "@/components/layout/heading-section";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import Filters from "@/components/filters";

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ResultPage = () => {
    const searchParams = useSearchParams();

    let keyword = searchParams.get("keyword");

    if (keyword) {
        keyword = capitalizeFirstLetter(keyword);
    }

    const categories = useInfoStore((state) => state.categories);

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [isSwitchOn, setSwitchOn] = useState(false);

    const [categorySelectValue, setCategorySelectValue] = useState("");

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/collection/api/search?keyword=${keyword}`,
            )
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProducts(response.data.data);
                    setFilteredProducts(response.data.data);
                }
            });
    }, []);

    // Update the filtered products when the switch is toggled
    useEffect(() => {
        if (isSwitchOn) {
            // If the switch is on, set filteredProducts to the in-stock products
            setFilteredProducts(
                products.filter((product) => product.stock > 0),
            );
        } else {
            // If the switch is off, set filteredProducts back to all products
            setFilteredProducts(products);
        }
    }, [products, isSwitchOn]);

    // Extract the unique category ids from the products
    const uniqueCategories = Array.from(
        new Set(products.map((product) => product.categoryId)),
    );

    // Filter the categories to only include the unique categories
    const currentCategories = categories.filter((category) =>
        uniqueCategories.includes(category.id.toString()),
    );

    // Update the filtered products when the category select value changes
    useEffect(() => {
        if (categorySelectValue !== "") {
            // Find the brand object that matches the selected brand name
            const selectedCategory = categories.find(
                (category) =>
                    category.name.toLowerCase() === categorySelectValue,
            );

            if (selectedCategory) {
                // Filter the products
                const filteredProducts = products.filter(
                    (product) =>
                        product.categoryId === selectedCategory.id.toString(),
                );

                // Update the state
                setFilteredProducts(filteredProducts);
            }
        } else {
            setFilteredProducts(products);
        }
    }, [categorySelectValue]);

    const handleClearFilters = () => {
        setSwitchOn(false);
        setCategorySelectValue("");

        setFilteredProducts(products);
    };

    return (
        //! Primary breakpoint: LG
        <>
            <HeadingSection title="Search Results" aboutButton={false} />

            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-4">
                            <Card className="border-transparent lg:border-foreground">
                                <CardHeader className="hidden lg:flex">
                                    <CardTitle>
                                        <div className="flex items-center">
                                            Filters
                                            <SlidersHorizontal className="ml-2" />
                                        </div>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex space-x-2 lg:hidden">
                                        <Sheet>
                                            <SheetTrigger asChild>
                                                <Button className="flex-1">
                                                    Filters
                                                    <SlidersHorizontal
                                                        className="ml-1"
                                                        size={20}
                                                    />
                                                </Button>
                                            </SheetTrigger>

                                            <SheetContent
                                                side="right"
                                                className=""
                                            >
                                                <SheetHeader>
                                                    <SheetTitle>
                                                        <div className="flex items-center">
                                                            Filters
                                                            <SlidersHorizontal className="ml-2" />
                                                        </div>
                                                    </SheetTitle>
                                                </SheetHeader>

                                                <div className="grid gap-4 py-4">
                                                    <Filters
                                                        isSwitchOn={isSwitchOn}
                                                        categories={
                                                            currentCategories
                                                        }
                                                        setSwitchOn={
                                                            setSwitchOn
                                                        }
                                                        categorySelectValue={
                                                            categorySelectValue
                                                        }
                                                        setCategorySelectValue={
                                                            setCategorySelectValue
                                                        }
                                                    />
                                                </div>
                                            </SheetContent>
                                        </Sheet>

                                        <Button
                                            variant="secondary"
                                            className="flex-1"
                                            onClick={handleClearFilters}
                                        >
                                            Clear filters
                                        </Button>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        className="hidden lg:block"
                                        onClick={handleClearFilters}
                                    >
                                        Clear filters
                                    </Button>

                                    <div className="hidden lg:block">
                                        <Filters
                                            isSwitchOn={isSwitchOn}
                                            setSwitchOn={setSwitchOn}
                                            categories={currentCategories}
                                            categorySelectValue={
                                                categorySelectValue
                                            }
                                            setCategorySelectValue={
                                                setCategorySelectValue
                                            }
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 lg:mt-0 lg:grid-cols-3">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} data={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ResultPage;
