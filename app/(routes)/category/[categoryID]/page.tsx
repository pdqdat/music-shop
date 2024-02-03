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

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
    const categories = useInfoStore((state) => state.categories);
    const brands = useInfoStore((state) => state.brands);

    // Get the current category
    const category = categories.find(
        (category) => category.id == params.categoryID,
    );

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [isSwitchOn, setSwitchOn] = useState(false);

    const [brandSelectValue, setBrandSelectValue] = useState("");

    let myuuid = uuidv4();

    useEffect(() => {
        axios
            .post("http://localhost:8080/collection/api/category", {
                categoryId: params.categoryID,
                request_id: myuuid,
            })
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProducts(response.data.data);
                    setFilteredProducts(response.data.data);
                }
            });
    }, [params.categoryID]);

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

    // Extract the unique brand ids from the products
    const brandIds = products.reduce((unique: string[], product) => {
        return unique.includes(product.brandId)
            ? unique
            : [...unique, product.brandId];
    }, []);

    // Filter the brands that are included in the brandIds list
    const currentBrands = brands.filter((brand) => brandIds.includes(brand.id));

    useEffect(() => {
        if (brandSelectValue !== "") {
            // Find the brand object that matches the selected brand name
            const selectedBrand = brands.find(
                (brand) => brand.name.toLowerCase() === brandSelectValue,
            );

            if (selectedBrand) {
                // Filter the products
                const filteredProducts = products.filter(
                    (product) => product.brandId === selectedBrand.id,
                );

                // Update the state
                setFilteredProducts(filteredProducts);
            }
        } else {
            setFilteredProducts(products);
        }
    }, [brandSelectValue]);

    const handleClearFilters = () => {
        setSwitchOn(false);
        setBrandSelectValue("");

        setFilteredProducts(products);
    };

    return (
        //! Primary breakpoint: LG
        <>
            <HeadingSection title={category?.name || ""} />

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
                                    {/* Sidebar toggler & clear filters button, displayed when screen size is below the LG breakpoint */}
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
                                                        setSwitchOn={
                                                            setSwitchOn
                                                        }
                                                        brands={currentBrands}
                                                        brandSelectValue={
                                                            brandSelectValue
                                                        }
                                                        setBrandSelectValue={
                                                            setBrandSelectValue
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
                                            brands={currentBrands}
                                            brandSelectValue={brandSelectValue}
                                            setBrandSelectValue={
                                                setBrandSelectValue
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
            <section
                id={`${category?.name}-description`}
                className="bg-accent-foreground px-4 pb-6 pt-4 dark:bg-primary-foreground sm:px-6 lg:px-8"
            >
                <Container>
                    <h1 className="text-2xl font-bold text-primary">
                        {category?.name}
                    </h1>

                    <p className="text-background dark:text-foreground">
                        {category?.description || "Default description"}
                    </p>
                </Container>
            </section>
        </>
    );
};

export default CategoryPage;
