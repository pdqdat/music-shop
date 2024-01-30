// Components
import Container from "@/components/container";
import HeadingSection from "@/components/layout/heading-section";

const CategoryPage = ({ params }: { params: { categoryID: string } }) => {
    return (
        <>
            <HeadingSection title={"Guitar"} />

            <Container>
                <div className="flex flex-col items-center space-y-8 p-24">
                    <h1 className="text-center text-6xl font-bold">
                        {params.categoryID}
                    </h1>
                </div>
            </Container>

            {/* Description section */}
            <section
                id="GuitarDescription"
                className="flex justify-center bg-accent-foreground px-4 pb-6 pt-4 dark:bg-primary-foreground sm:px-6 lg:px-8"
            >
                <Container>
                    <h1 className="text-2xl font-bold text-background dark:text-foreground">
                        Description
                    </h1>

                    <p className=" text-background dark:text-foreground">
                        Our huge selection of electric guitars for sale means
                        there is something for everyone. If you’re a new player
                        and are just starting out, we offer affordable electric
                        guitars ideal for getting to grips with. For experienced
                        guitarists and professionals, we offer world-class
                        custom shop guitars and even some rare models that are
                        bound to impress.
                    </p>
                </Container>
            </section>
        </>
    );
};

export default CategoryPage;
