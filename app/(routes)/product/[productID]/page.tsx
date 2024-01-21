// Components
import Container from "@/components/container";

const ProductPage = ({ params }: { params: { productID: string } }) => {
    return (
        <Container>
            <div className="flex flex-col items-center space-y-8 p-24">
                <h1 className="text-center text-6xl font-bold">
                    {params.productID}
                </h1>
            </div>
        </Container>
    );
};

export default ProductPage;
