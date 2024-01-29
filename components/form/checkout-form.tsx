"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Icons
import { Loader2, ChevronLeft } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Hooks
import useCheckoutData from "@/hooks/use-checkout";

interface CheckoutFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "Please enter your first name",
    }),
    lastName: z.string().min(1, {
        message: "Please enter your last name",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    phoneNumber: z.string().regex(/^0[0-9]{9}$/, {
        message: "Phone number must be 10 digits long and start with '0'",
    }),
    province: z.string().min(1, { message: "Please select a province" }),
    district: z.string().min(1, { message: "Please select a district" }),
    ward: z.string().min(1, { message: "Please select a ward" }),
    address: z.string().min(1, {
        message: "Please enter your address properly",
    }),
});

export function CheckoutForm({ className, ...props }: CheckoutFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [provinces, setProvinces] = useState([]);

    const { setCheckoutData } = useCheckoutData();
    const router = useRouter();

    // Fetch provinces from API
    // useEffect(() => {
    //     axios
    //         .get("https://vapi.vnappmob.com/api/province")
    //         .then((response) => {
    //             const provinceNames = response.data.results.map(
    //                 (province: { province_name: string }) =>
    //                     province.province_name,
    //             );

    //             setProvinces(provinceNames);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching provinces:", error);
    //         });
    // }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            province: "",
            district: "",
            ward: "",
            address: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);

        setCheckoutData(
            values.firstName,
            values.lastName,
            values.email,
            values.phoneNumber,
            values.province,
            values.district,
            values.ward,
            values.address,
        );
        router.push("/payment");
        // console.log(values);

        // setTimeout(() => {
        //     setIsLoading(false);
        // }, 3000);
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4"
                >
                    <div className="grid grid-cols-2 space-x-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First name</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                            autoFocus
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last name</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>

                                <FormControl>
                                    <Input
                                        {...field}
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect="off"
                                        disabled={isLoading}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>

                                <FormControl>
                                    <Input {...field} disabled={isLoading} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Province selector */}
                    {/* <FormField
                        control={form.control}
                        name="province"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Province</FormLabel>

                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    disabled={isLoading}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select a province" />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Province</SelectLabel>

                                            {provinces.map(
                                                (provinceName, index) => (
                                                    <SelectItem
                                                        key={index}
                                                        value={provinceName}
                                                    >
                                                        {provinceName}
                                                    </SelectItem>
                                                ),
                                            )}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}

                    <div className="grid grid-cols-1 space-x-0 space-y-0 md:grid-cols-3 md:space-x-4">
                        <FormField
                            control={form.control}
                            name="province"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Province/City</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>District</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="ward"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ward</FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isLoading}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Shipping address</FormLabel>

                                <FormControl>
                                    <Input {...field} disabled={isLoading} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-between">
                        <Link href="/cart">
                            <Button variant="secondary">
                                <ChevronLeft className="mr-1" />
                                Back to Cart
                            </Button>
                        </Link>

                        <Button type="submit" disabled={isLoading}>
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Go to Payment
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
