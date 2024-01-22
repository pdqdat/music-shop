import Image from "next/image";

// Types
import { Product } from "@/types";

// Constants
import { campaigns, products } from "@/lib/constants";

// Components
import Container from "@/components/container";
import ProductCard from "@/components/product-card";

const ProductPage = ({ params }: { params: { campaignID: string } }) => {
    // Find the campaign based on the campaignID
    const campaign = campaigns.find(
        (campaign) => campaign.id === params.campaignID,
    );

    if (!campaign)
        return (
            <Container>
                <div className="flex flex-col items-center space-y-8 p-24">
                    <h1 className="text-center text-6xl font-bold">
                        404 | Campaign not found
                    </h1>
                </div>
            </Container>
        );

    // Filter the products based on the campaign's productID
    const campaignProducts = campaign.productID
        .map((productID) => {
            return products.find((product) => product.id === productID);
        })
        .filter((product): product is Product => product !== undefined);

    return (
        <Container>
            <div className="px-8 py-20">
                <h1 className="pb-4 text-center text-6xl font-bold">
                    {campaign.name}
                </h1>

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {campaignProducts.map((item) => (
                        <ProductCard key={item?.id} data={item} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ProductPage;
