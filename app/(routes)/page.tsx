import Link from "next/link";

// Constants
import { products, campaigns } from "@/lib/constants";

// Components
import CampaignSection from "@/components/layout/campaign-section";
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import DraftProductCard from "@/components/draft-product-card";

const HomePage = () => {
    // Get all products in the January Sale campaign
    const januarySaleCampaign = campaigns[0];

    const januarySaleProducts = products.filter((product) =>
        januarySaleCampaign?.productID.includes(product.id),
    );

    return (
        <div>
            <CampaignSection />

            <Container>
                <div className="px-8 py-20">
                    <section id="january-sale" className="py-8">
                        <div className="mb-4 flex items-center justify-between border-b pb-4">
                            <h1 className="text-3xl font-semibold">
                                January Sale
                            </h1>

                            <Link href="/campaign/1">
                                <Button>View all</Button>
                            </Link>
                        </div>

                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {januarySaleProducts.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))}
                        </div>
                    </section>

                    <section id="all-products" className="py-8">
                        <div className="mb-4 flex items-center justify-between border-b pb-4">
                            <h1 className="text-3xl font-semibold">
                                Browse our products
                            </h1>
                        </div>

                        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                            {products.map((item) => (
                                <ProductCard key={item.id} data={item} />
                            ))}
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
