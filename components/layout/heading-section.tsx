import Link from "next/link";

// Components
import Container from "@/components/container";
import { Button } from "@/components/ui/button";

interface HeadingSectionProps {
    title: string;
}

const HeadingSection = ({ title }: HeadingSectionProps) => {
    return (
        <div className="flex justify-center bg-accent-foreground pb-6 pt-4 dark:bg-primary-foreground">
            <Container>
                <h1 className="text-center text-4xl font-bold text-primary">
                    {title}
                </h1>

                <Link href={`#${title}-description`}>
                    <Button
                        variant="link"
                        className="px-4 text-base font-medium text-background dark:text-foreground sm:px-6 lg:px-8"
                    >
                        More about {title}
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default HeadingSection;
