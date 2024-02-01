import Link from "next/link";

import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

// Components
import Container from "@/components/container";

const SocialSection = () => {
    return (
        <div className="flex h-32 items-center bg-primary p-8 text-black">
            <div className="w-full">
                <Container>
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold lg:text-4xl">
                            Let&apos;s get social
                        </h1>

                        <div className="flex space-x-4">
                            <Link
                                href="https://www.instagram.com/datttphan/"
                                target="_blank"
                            >
                                <Instagram size={40} />
                            </Link>

                            <Link
                                href="https://www.facebook.com/profile.php?id=100011347858353"
                                target="_blank"
                            >
                                <Facebook size={40} />
                            </Link>

                            <Link
                                href="https://twitter.com/pdquocdat"
                                target="_blank"
                            >
                                <Twitter size={40} />
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SocialSection;
