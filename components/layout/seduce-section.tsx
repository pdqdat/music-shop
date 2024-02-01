import Image from "next/image";

// Types
import { Product } from "@/types";

// Components
import ProductList from "@/components/product-list";
import Container from "@/components/container";

interface SeduceSectionProps {
    items: Product[];
}

const SeduceSection = ({ items }: SeduceSectionProps) => {
    // Random between two titles
    const title =
        Math.random() < 0.5 ? "Why not consider..." : "People also bought";

    return (
        <div className="bg-muted px-4 py-8">
            <Container>
                <ProductList title={title} items={items} />
            </Container>
        </div>
    );
};

export default SeduceSection;
