import Image from "next/image";

// Constants
import { products } from "@/lib/constants";

// Components
import Container from "@/components/container";

const ProductPage = ({ params }: { params: { productID: string } }) => {
    const product = products.find((product) => product.id === params.productID);

    if (!product)
        return (
            <Container>
                <div className="flex flex-col items-center space-y-8 p-24">
                    <h1 className="text-center text-6xl font-bold">
                        404 | Product not found
                    </h1>
                </div>
            </Container>
        );

    return (
        <Container>
            <div className="flex flex-col items-center space-y-8 p-24">
                <h1 className="text-center text-6xl font-bold">
                    {product.name}
                </h1>
                
                <p className="text-2xl text-gray-700 dark:text-gray-500">
                    {product.department.name}
                </p>
            </div>
        </Container>
    );
};

export default ProductPage;
