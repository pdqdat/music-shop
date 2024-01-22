import { products } from "@/lib/constants";

// Components
import CampaignSection from "@/components/layout/campaign-section";
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import DraftProductCard from "@/components/draft-product-card";

const HomePage = () => {
    return (
        <div>
            <CampaignSection />

            <Container>
                <div className="px-8 py-20">
                    <h1 className="pb-4 text-3xl font-semibold">
                        January Sale
                    </h1>

                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {products.map((item) => (
                            <ProductCard key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
