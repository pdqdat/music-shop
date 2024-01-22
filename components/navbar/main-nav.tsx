"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// Types
import { Department } from "@/types";

interface MainNavProps {
    data: Department[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/department/${route.id}`,
        label: route.name,
        active: pathname === `/department/${route.id}`,
    }));

    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "font-medium transition-colors hover:text-foreground",
                        route.active ? "text-foreground" : "text-neutral-500",
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

export default MainNav;
