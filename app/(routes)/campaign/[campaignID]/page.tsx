// Components
import Container from "@/components/container";

const ProductPage = ({ params }: { params: { campaignID: string } }) => {
    return (
        <Container>
            <div className="flex flex-col items-center space-y-8 p-24">
                <h1 className="text-center text-6xl font-bold">
                    {params.campaignID}
                </h1>
            </div>
        </Container>
    );
};

export default ProductPage;
