"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

// Icons
import { Loader2 } from "lucide-react";

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

// Hooks
import useCheckoutData from "@/hooks/use-checkout";

interface CheckoutFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
    fullName: z.string().min(1, {
        message: "Please enter your full name properly",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    phoneNumber: z.string().regex(/^0[0-9]{9}$/, {
        message: "Phone number must be 10 digits long and start with '0'",
    }),
    address: z.string().min(1, {
        message: "Please enter your address properly",
    }),
});

export function CheckoutForm({ className, ...props }: CheckoutFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { setCheckoutData } = useCheckoutData();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);

        setCheckoutData(
            values.fullName,
            values.email,
            values.phoneNumber,
            values.address,
        );
        router.push("/payment");

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
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full name</FormLabel>

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

                    <Button type="submit" disabled={isLoading}>
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Payment
                    </Button>
                </form>
            </Form>
        </div>
    );
}
