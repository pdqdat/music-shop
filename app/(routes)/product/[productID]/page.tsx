import Image from "next/image";

// Constants
import { products } from "@/lib/constants";

// Components
import Container from "@/components/container";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import SeduceSection from "@/components/layout/seduce-section";

const ProductPage = ({ params }: { params: { productID: string } }) => {
    const product = products.find((product) => product.id === params.productID);
    // TODO: get related products
    const relatedProducts = products.slice(0, 4);

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
        //! Primary breakpoint: LG
        <>
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8">
                    <h1 className="block text-2xl font-semibold lg:hidden">
                        {product.name}
                    </h1>

                    {/* Stock status */}
                    <div className="mt-1 block lg:hidden">
                        {product.stock !== 0 ? (
                            <Badge className="text-base">In stock</Badge>
                        ) : (
                            <Badge className="text-base" variant="destructive">
                                Out of stock
                            </Badge>
                        )}
                    </div>

                    <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
                        <div className="md:col-span-7">
                            <div className="relative aspect-square overflow-hidden rounded-xl border">
                                <Image
                                    src={product.images[0]}
                                    alt="Product image"
                                    fill
                                    className="aspect-square rounded-lg object-contain duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>

                        <Card className="relative mt-2 overflow-hidden md:col-span-5 lg:mt-0">
                            {/* Brand name */}
                            <div className="absolute left-0 top-0 hidden rounded-br-lg bg-muted px-2 py-1 font-semibold lg:block">
                                Taylor
                            </div>

                            <CardHeader className="mt-4 hidden lg:flex">
                                <CardTitle>{product.name}</CardTitle>

                                {/* Stock status */}
                                <div className="mt-1">
                                    {product.stock !== 0 ? (
                                        <Badge className="text-base">
                                            In stock
                                        </Badge>
                                    ) : (
                                        <Badge
                                            className="text-base"
                                            variant="destructive"
                                        >
                                            Out of stock
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="mt-2">
                                <Separator className="mb-2 hidden lg:block" />

                                <Currency value={product.price} />
                            </CardContent>

                            <CardFooter className="flex-col">
                                <Button className="w-full">Add to cart</Button>

                                <div className="mt-2">
                                    <p>Fundiin visibility</p>
                                </div>
                            </CardFooter>
                        </Card>

                        <div className="mt-2 md:col-span-7">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Description</CardTitle>
                                </CardHeader>

                                <CardContent className="mt-2">
                                    <p>Content</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </Container>

            <SeduceSection items={relatedProducts} />
        </>
    );
};

export default ProductPage;
