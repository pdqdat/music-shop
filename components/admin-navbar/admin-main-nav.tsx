"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// Types
import { Category } from "@/types";

interface AdminMainNavProps {
    data: Category[];
}

const AdminMainNav: React.FC<AdminMainNavProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/admin/category-manager/${route.id}`,
        label: route.name,
        active: pathname === `/admin/category-manager/${route.id}`,
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

export default AdminMainNav;
