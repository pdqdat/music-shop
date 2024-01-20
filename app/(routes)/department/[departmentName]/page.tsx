// Components
import Container from "@/components/container";

const DepartmentPage = ({ params }: { params: { departmentName: string } }) => {
    return (
        <Container>
            <div className="flex flex-col items-center p-24 space-y-8">
                <h1 className="text-6xl font-bold text-center">{params.departmentName}</h1>
            </div>
        </Container>
    );
};

export default DepartmentPage;
