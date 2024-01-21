import { products } from "@/lib/constants";

// Components
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import DraftProductCard from "@/components/draft-product-card";

const HomePage = () => {
    return (
        <Container>
            <div className="py-20">
                <h1 className="pb-12 text-center text-6xl font-bold">
                    Welcome to DC Music
                </h1>

                <h1 className="pb-4 text-3xl font-semibold">
                    Browse our products
                </h1>

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {products.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
