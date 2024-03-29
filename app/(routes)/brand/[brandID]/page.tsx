"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

const BrandPage = ({ params }: { params: { brandID: string } }) => {
    const brands = useInfoStore((state) => state.brands);
    const categories = useInfoStore((state) => state.categories);

    // Get the current brand
    const brand = brands.find((brand) => brand.id == params.brandID);

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [isSwitchOn, setSwitchOn] = useState(false);

    const [categorySelectValue, setCategorySelectValue] = useState("");

    let myuuid = uuidv4();

    useEffect(() => {
        axios
            .post("http://localhost:8080/collection/api/brand", {
                brandId: params.brandID,
                request_id: myuuid,
            })
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProducts(response.data.data);
                    setFilteredProducts(response.data.data);
                }
            });
    }, [params.brandID]);

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
            <HeadingSection title={brand?.name || ""} aboutButton={false} />

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

            {/* Description section */}
            {/* <section
                id={`${brand?.name}-description`}
                className="bg-accent-foreground px-4 pb-6 pt-4 dark:bg-primary-foreground sm:px-6 lg:px-8"
            >
                <Container>
                    <h1 className="text-2xl font-bold text-primary">
                        {brand?.name}
                    </h1>

                    <p className="text-background dark:text-foreground">
                        Default description
                    </p>
                </Container>
            </section> */}
        </>
    );
};

export default BrandPage;
