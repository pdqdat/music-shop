"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

// Components
import { RegisterForm } from "@/components/form/register-form";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
    const { theme } = useTheme();

    return (
        <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
            {/* Div that contains the register form */}
            <div className="relative flex items-center justify-center">
                {/* Logo & Log in button container */}
                <div className="absolute top-4 flex w-full items-center justify-between px-8 lg:top-8">
                    <Link href="/">
                        <p className="text-xl font-bold">DC MUSIC</p>
                    </Link>

                    <Link href="/login">
                        <Button variant="secondary">Log in</Button>
                    </Link>
                </div>

                <div className="p-4 lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold uppercase tracking-tight">
                                Register
                            </h1>

                            <p className="text-sm text-muted-foreground">
                                Create a new account to make purchases or check
                                your order history.
                            </p>
                        </div>

                        <RegisterForm />

                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>

            {/* Div that contains the background image */}
            <div className="relative hidden h-full w-full lg:block">
                <Image
                    src={
                        theme === "light"
                            ? "/light-cover.webp"
                            : "/dark-cover.webp"
                    }
                    alt="Music space"
                    fill
                    className="absolute left-0 top-0 object-cover"
                />

                <div className="absolute right-8 top-8 z-20 text-white dark:left-8">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;Without music, life would be a
                            mistake.&rdquo;
                        </p>

                        <footer className="text-right text-sm dark:text-left">
                            Friedrich Nietzsche
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
