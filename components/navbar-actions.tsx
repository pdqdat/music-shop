"use client";

import { User, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => router.push("/account/login")}
                        className="text-sm font-medium text-black rounded-full"
                        variant={"ghost"}
                    >
                        <User size={20} />
                    </Button>
                </TooltipTrigger>

                <TooltipContent>
                    <p>Log in</p>
                </TooltipContent>
            </Tooltip>

            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingCart size={20} color="white" />

                {/* Cart length */}
                <span className="ml-2 text-sm font-medium text-white">0</span>
            </Button>
        </div>
    );
};

export default NavbarActions;
