import Image from "next/image";
import Link from "next/link";

// Constants
import { campaigns } from "@/lib/constants";

// Components
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CampaignSection = () => {
    return (
        <div className="flex justify-center bg-accent-foreground dark:bg-muted-foreground">
            <Carousel className="w-full max-w-xs md:max-w-4xl ">
                <CarouselContent>
                    {campaigns.map((item) => {
                        // Determine the href based on the number of products in the campaign
                        let href;

                        // If there is only one product, link to the product page, else link to the campaign page
                        if (item.productID.length === 1) {
                            href = `/product/${item.productID[0]}`;
                        } else {
                            href = `/campaign/${item.id}`;
                        }

                        return (
                            <CarouselItem
                                key={item.id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="p-1">
                                    <Link href={href}>
                                        <Card className="border-0">
                                            <CardContent className="relative aspect-square items-center justify-center overflow-hidden p-6">
                                                <Image
                                                    src={item.banner}
                                                    alt="Campaign banner"
                                                    fill
                                                    className="aspect-square rounded-lg object-cover duration-300 ease-in-out group-hover:scale-110"
                                                />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CampaignSection;
