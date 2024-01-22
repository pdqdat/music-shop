"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Hooks
import useCart from "@/hooks/use-cart";

// Icons
import { User, ShoppingCart, Moon, Sun } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarActions = () => {
    const router = useRouter();
    const cart = useCart();

    const [isMounted, setIsMounted] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-2">
            {/* Theme toggler */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                    >
                        <Sun
                            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            size={20}
                        />
                        <Moon
                            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            size={20}
                        />

                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Log in button */}
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => router.push("/account/login")}
                        className="rounded-full text-sm font-medium"
                        variant="ghost"
                        size="icon"
                    >
                        <User size={20} />
                    </Button>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Log in</p>
                </TooltipContent>
            </Tooltip>

            {/* Cart button */}
            <Button
                onClick={() => router.push("/cart")}
                className="flex items-center rounded-full px-4 py-2"
            >
                <ShoppingCart size={20} />

                {/* Cart length */}
                <span className="ml-2 text-sm font-medium">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    );
};

export default NavbarActions;
