import Link from "next/link";

import Image from "next/image";

// Components
import { UserAuthForm } from "../../../../components/user-auth-form";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
    return (
        <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center">
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

                        <UserAuthForm />

                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
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

            <div className="relative hidden h-full w-full lg:block">
                <img
                    src="/music-space.jpg"
                    alt="Music space"
                    className="absolute left-0 top-0 h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default RegisterPage;
