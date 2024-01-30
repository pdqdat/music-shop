// Constants
import { products, campaigns } from "@/lib/constants";

// Components
import CampaignSection from "@/components/layout/campaign-section";
import Container from "@/components/container";
import ProductList from "@/components/product-list";

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
                <div className="px-8 py-20 space-y-8">
                    <section id="jan-sale">
                        <ProductList title="January Sale" items={januarySaleProducts} buttonAction="/campaign/1"/>
                    </section>

                    <section id="all-products">
                        <ProductList title="Browse our products" items={products}/>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
