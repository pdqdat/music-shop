"use client";

import Link from "next/link";

// Hooks
import { useInfoStore } from "@/hooks/use-info";

// Components
import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";

// Icons
import { MapPin, Phone, Mail, Music } from "lucide-react";

const Footer = () => {
    const categories = useInfoStore((state) => state.categories);
    const brands = useInfoStore((state) => state.brands);

    const categoryRoutes = categories.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
    }));
    const brandRoutes = brands.map((route) => ({
        href: `/brand/${route.id}`,
        label: route.name,
    }));

    return (
        <footer className="bg-accent-foreground p-8 dark:bg-background">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h1 className="mb-4 text-2xl font-bold text-primary">
                            Shop by category
                        </h1>

                        <ul>
                            {categoryRoutes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className="text-lg font-medium text-white duration-300 ease-in-out hover:text-primary"
                                >
                                    <li>{route.label}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="mb-4 text-2xl font-bold text-primary">
                            Shop by brand
                        </h1>

                        <ul>
                            {brandRoutes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className="text-lg font-medium text-white duration-300 ease-in-out hover:text-primary"
                                >
                                    <li>{route.label}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="mb-4 text-2xl font-bold text-primary">
                            Help & Support
                        </h1>

                        <ul>
                            <li className="cursor-pointer text-lg font-medium text-white duration-300 ease-in-out hover:text-primary">
                                FAQs
                            </li>
                            <li className="cursor-pointer text-lg font-medium text-white duration-300 ease-in-out hover:text-primary">
                                Privacy Policy
                            </li>
                            <li className="cursor-pointer text-lg font-medium text-white duration-300 ease-in-out hover:text-primary">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="mb-4 text-2xl font-bold text-primary">
                            About Us
                        </h1>

                        <p className="text-white">
                            DC Music was founded by two students who are
                            passionate about music and want to share our passion
                            with the world. We are dedicated to providing the
                            best quality products and services. Come join us on
                            our journey right in the heart of Sai Gon, Viet Nam.
                        </p>

                        <Link
                            href="https://maps.app.goo.gl/Dqmc51jwzVxsBzYq9"
                            target="_blank"
                        >
                            <div className="mt-4 flex text-white hover:text-primary">
                                <MapPin className="mr-2" />
                                District 5, Sai Gon, Viet Nam
                            </div>
                        </Link>

                        <Link href="tel:+84384265171">
                            <div className="mt-2 flex text-white hover:text-primary">
                                <Phone className="mr-2" />
                                (+84) 384 265 171
                            </div>
                        </Link>

                        <Link href="mailto:dc.music@gmail.com">
                            <div className="mt-2 flex text-white hover:text-primary">
                                <Mail className="mr-2" />
                                dc.music@gmail.com
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>

            <Separator className="my-4" />

            <p className="text-center text-white">
                &copy; 2023 DC Music, Inc. All rights reserved.
            </p>

            <p className="mt-4 flex justify-center space-x-2 text-white">
                <Music size={15} />
                <Music size={15} />
                <Music size={15} />
            </p>
        </footer>
    );
};

export default Footer;
