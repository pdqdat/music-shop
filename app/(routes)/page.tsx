"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

// Types
import { Product } from "@/types";

// Constants
import { campaigns } from "@/lib/constants";

// Components
import CampaignSection from "@/components/layout/campaign-section";
import BrandSection from "@/components/layout/brand-section";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

const HomePage = () => {
    const setCategories = useInfoStore((state) => state.setCategories);
    const setBrands = useInfoStore((state) => state.setBrands);
    const [topProducts, setTopProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/collection/api/get-info")
            .then((response) => {
                setCategories(response.data.data.categories);
                setBrands(response.data.data.brand);
                setTopProducts(response.data.data.products);
            });
    }, []);

    // Get all products in the January Sale campaign
    const januarySaleCampaign = campaigns[0];

    // const januarySaleProducts = products.filter((product) =>
    //     januarySaleCampaign?.productID.includes(product.id),
    // );

    return (
        <>
            <CampaignSection />

            <Container>
                <div className="space-y-8 px-8 py-20">
                    {/* <section id="jan-sale">
                        <ProductList title="January Sale" items={januarySaleProducts} buttonAction="/campaign/1"/>
                    </section> */}

                    <section id="top-products">
                        <ProductList
                            title="What people buy the most"
                            items={topProducts}
                        />
                    </section>
                </div>
            </Container>

            <BrandSection />
        </>
    );
};

export default HomePage;
