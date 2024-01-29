"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Hooks
import useCart from "@/hooks/use-cart";

// Icons
import { User, ShoppingCart } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ThemeToggler from "@/components/theme-toggler";

const NavbarActions = () => {
    const router = useRouter();
    const cart = useCart();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    // Get the total number of items in the cart
    const totalItems = cart.items.reduce((total, item) => {
        return total + Number(item.quantity);
    }, 0);

    return (
        <div className="ml-auto flex items-center gap-x-2">
            {/* Theme toggler */}
            <ThemeToggler />

            {/* Log in button */}
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => router.push("/login")}
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

                {/* Number of items in cart */}
                <span className="ml-2 text-sm font-medium">{totalItems}</span>
            </Button>
        </div>
    );
};

export default NavbarActions;
