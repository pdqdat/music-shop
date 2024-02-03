import React, { useState } from "react";

// Icons
import { Filter, Check, ChevronsUpDown } from "lucide-react";

// Components
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

// Types
import { Brand } from "@/types";

// Utils
import { cn } from "@/lib/utils";

interface FiltersProps {
    isSwitchOn: boolean;
    setSwitchOn: (value: boolean) => void;
    brands: Brand[];
    brandSelectValue: string;
    setBrandSelectValue: (value: string) => void;
}

const Filters = ({
    isSwitchOn,
    setSwitchOn,
    brands,
    brandSelectValue,
    setBrandSelectValue,
}: FiltersProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Separator className="my-4" />
            <h1 className="mb-2 font-semibold">Brands</h1>

            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                    >
                        {brandSelectValue
                            ? brands.find(
                                  (brand) =>
                                      brand.name.toLowerCase() ===
                                      brandSelectValue,
                              )?.name
                            : "Select brands..."}

                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>

                <PopoverContent className="p-0">
                    <Command>
                        <CommandInput placeholder="Search brands..." />

                        <CommandEmpty>No brand found</CommandEmpty>

                        <CommandGroup>
                            {brands.map((brand) => (
                                <CommandItem
                                    key={brand.name}
                                    value={brand.name}
                                    onSelect={(currentValue) => {
                                        setBrandSelectValue(
                                            currentValue.toLowerCase() ===
                                                brandSelectValue
                                                ? ""
                                                : currentValue,
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            brandSelectValue ===
                                                brand.name.toLowerCase()
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />

                                    {brand.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            <Separator className="my-4" />

            <div className="flex items-center space-x-2">
                <Switch
                    id="stock-status"
                    checked={isSwitchOn}
                    onCheckedChange={setSwitchOn}
                />

                <Label htmlFor="stock-status">In Stock</Label>
            </div>
        </>
    );
};

export default Filters;
