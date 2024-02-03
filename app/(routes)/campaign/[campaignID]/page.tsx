"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Types
import { Product } from "@/types";

// Constants
import { campaigns } from "@/lib/constants";

// Components
import Container from "@/components/container";
import ProductList from "@/components/product-list";
import HeadingSection from "@/components/layout/heading-section";

const ProductPage = ({ params }: { params: { campaignID: string } }) => {
    const [products, setProducts] = useState<Product[]>([]);

    // Find the campaign based on the campaignID
    const campaign = campaigns.find(
        (campaign) => campaign.id === params.campaignID,
    );

    if (!campaign)
        return (
            <Container>
                <div className="flex flex-col items-center px-4 py-24 sm:px-6 lg:px-8">
                    <h1 className="text-center text-6xl font-bold">
                        404 | Campaign not found
                    </h1>
                </div>
            </Container>
        );

    let myuuid = uuidv4();

    useEffect(() => {
        axios
            .post("http://localhost:8080/collection/api/category", {
                categoryId: "1",
                request_id: myuuid,
            })
            .then((response) => {
                if (response.data.status === "SUCCESS") {
                    setProducts(response.data.data);
                }
            });
    }, []);

    // Filter the products based on the campaign's productID
    const campaignProducts = campaign.productID
        .map((productID) => {
            return products.find((product) => product.id === productID);
        })
        .filter((product): product is Product => product !== undefined);

    return (
        <>
            <HeadingSection title={campaign.name} aboutButton={false} />

            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <ProductList
                        title="Enjoy great discounts on your favorite products"
                        items={campaignProducts}
                    />
                </div>
            </Container>
        </>
    );
};

export default ProductPage;
