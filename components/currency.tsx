"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

interface CurrencyProps {
    value?: string | number;
    className?: string;
}

const Currency: React.FC<CurrencyProps> = ({ value = 0, className }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className={cn("text-xl font-semibold text-primary", className)}>
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;
