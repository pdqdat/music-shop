"use client";

import axios from "axios";
import { useState, useEffect } from "react";

// Types
import { Product } from "@/types";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

// Components
import Container from "@/components/container";
import HeadingSection from "@/components/layout/heading-section";
import ProductList from "@/components/product-list";

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
    const categories = useInfoStore((state) => state.categories);
    const category = categories.find(
        (category) => category.id == params.categoryID,
    );
    // const [products, setProducts] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios
            .post("http://localhost:8080/collection/api/category", {
                categoryId: params.categoryID,
            })
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProducts(response.data.data);
                }
            });
    }, [params.categoryID]);

    return (
        <>
            <HeadingSection title={category?.name || ""} />

            <Container>
                <div className="flex flex-col items-center space-y-8 p-24">
                    {/* <h1 className="text-center text-6xl font-bold">
                        {category?.name}
                    </h1> */}
                    <ProductList
                        title={`Temporary product list of ${category?.name}`}
                        items={products}
                    />
                </div>
            </Container>

            {/* Description section */}
            <section
                id={`${category?.name}-description`}
                className="flex justify-center bg-accent-foreground px-4 pb-6 pt-4 dark:bg-primary-foreground sm:px-6 lg:px-8"
            >
                <Container>
                    <h1 className="text-2xl font-bold text-background dark:text-foreground">
                        {category?.name}
                    </h1>

                    <p className=" text-background dark:text-foreground">
                        {category?.description || "Default description"}
                    </p>
                </Container>
            </section>
        </>
    );
};

export default CategoryPage;
