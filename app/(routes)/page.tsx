import { products } from "@/lib/constants";

// Components
import Container from "@/components/container";
import ProductCard from "@/components/product-card";

const HomePage = () => {
    return (
        <Container>
            <div className="flex flex-col items-center space-y-8 p-24">
                <h1 className="text-center text-6xl font-bold">
                    Welcome to DC Music
                </h1>

                <h1 className="text-4xl font-semibold">Products</h1>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 w-full">
                    {products.map((item) => (
                        <ProductCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default HomePage;
