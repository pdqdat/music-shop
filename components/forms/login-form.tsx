"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

// Icons
import { Loader2 } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

// States
import useUserStore from "@/states/useUserStore";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address",
    }),
    password: z.string().min(3, {
        message: "Password must contain at least 3 character(s)",
    }),
});

export function LoginForm({ className, ...props }: LoginFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { setLoginData } = useUserStore();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);

        axios
            .post("http://localhost:8080/auth/api/login", values)
            .then((response) => {
                const { data } = response;
                if (data.status === "SUCCESS") {
                    const { accessToken, userId } = data.data;

                    console.log("Access Token:", accessToken);
                    console.log("User ID:", userId);

                    // Update the user state with the new access token and user ID
                    setLoginData(accessToken, userId);

                    toast("Logged in", {
                        description: `User ID: ${userId}`,
                        duration: 2000,
                    });
                } else {
                    toast.error(data.message || "Something went wrong!");
                }
            })
            .catch(() => {
                toast.error("Something went wrong!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>

                                <FormControl>
                                    <Input {...field} type="password" disabled={isLoading} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Log in with email
                    </Button>
                </form>
            </Form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
            </div>

            <Button variant="outline" type="button" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Google
            </Button>
        </div>
    );
}
