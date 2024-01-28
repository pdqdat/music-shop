// Components
import Container from "@/components/container";

const CategoryPage = ({ params }: { params: { categoryName: string } }) => {
    return (
        <Container>
            <div className="flex flex-col items-center space-y-8 p-24">
                <h1 className="text-center text-6xl font-bold">
                    {params.categoryName}
                </h1>
            </div>
        </Container>
    );
};

export default CategoryPage;
