"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Types
import { Product } from "@/types";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

// Icons
import { Filter } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/product-card";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

const BrandPage = ({ params }: { params: { brandID: string } }) => {
    const brands = useInfoStore((state) => state.brands);

    // Get the current brand
    const brand = brands.find((brand) => brand.id == params.brandID);
    const [products, setProducts] = useState<Product[]>([]);

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
                }
            });
    }, [params.brandID]);

    return (
        //! Primary breakpoint: LG
        <>
            <HeadingSection title={brand?.name || ""} />

            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="lg:col-span-4">
                            <Card className="border-transparent lg:border-foreground">
                                <CardHeader className="hidden lg:flex">
                                    <CardTitle>
                                        <div className="flex items-center">
                                            Filters
                                            <Filter className="ml-2" />
                                        </div>
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex space-x-2 lg:hidden">
                                        <Sheet>
                                            <SheetTrigger asChild>
                                                <Button className="flex-1">
                                                    Filters
                                                    <Filter
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
                                                            <Filter className="ml-2" />
                                                        </div>
                                                    </SheetTitle>
                                                </SheetHeader>

                                                <div className="grid gap-4 py-4">
                                                    filter 1
                                                </div>
                                            </SheetContent>
                                        </Sheet>

                                        <Button
                                            variant="secondary"
                                            className="flex-1"
                                        >
                                            Clear filters
                                        </Button>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        className="hidden lg:block"
                                    >
                                        Clear filters
                                    </Button>

                                    <Separator className="my-4" />

                                    <div className="flex items-center space-x-2">
                                        <Switch id="stock-status" />
                                        <Label htmlFor="stock-status">
                                            In Stock
                                        </Label>
                                    </div>

                                    <Separator className="my-4" />
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 lg:mt-0 lg:grid-cols-3">
                            {/* <div className="bg-blue-500 lg:col-span-8 mt-2 lg:mt-0"> */}
                            {products.map((product) => (
                                <ProductCard key={product.id} data={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Description section */}
            <section
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
            </section>
        </>
    );
};

export default BrandPage;
