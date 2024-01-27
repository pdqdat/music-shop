"use client";

import Link from "next/link";

// Icons
import { Menu } from "lucide-react";

// Constants
import { departments } from "@/lib/constants";

// Components
import Container from "@/components/container";
import SearchBar from "@/components/search-bar";
import NavbarActions from "@/components/navbar/navbar-actions";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const routes = departments.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
    }));

    return (
        <>
            <div>
                <Container>
                    <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                        {/* Menu icon */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mr-2 flex lg:hidden"
                                >
                                    <Menu size={20} />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="left" className="flex flex-col">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className="py-1 text-lg font-semibold duration-300 ease-in-out hover:translate-x-4 hover:text-primary"
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </SheetContent>
                        </Sheet>

                        <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                            <p className="text-xl font-bold">DC MUSIC</p>
                        </Link>

                        <div className="ml-4 hidden w-2/3 lg:block">
                            <SearchBar />
                        </div>

                        <NavbarActions />
                    </div>
                </Container>
            </div>

            <div className="bg-primary">
                <Container>
                    <nav className="hidden h-14 items-center justify-center space-x-8 px-4 text-lg font-semibold text-black sm:px-6 lg:flex lg:px-8">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className="duration-300 ease-in-out hover:text-white"
                            >
                                {route.label}
                            </Link>
                        ))}

                        <Link
                            href="/campaign/1"
                            className="flex h-full items-center bg-red-500 px-3 duration-300 ease-in-out hover:text-white"
                        >
                            SALE
                        </Link>
                    </nav>

                    <div className="flex h-14 items-center justify-center lg:hidden">
                        <div className="w-full px-16">
                            <SearchBar />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Navbar;
