import Link from "next/link";

// Components
import { UserAuthForm } from "../../../../components/user-auth-form";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
    return (
        <>
            <div className="relative flex h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="absolute left-4 top-4 z-20 text-lg font-medium text-foreground md:left-8 md:top-8 lg:text-background">
                    <Link href="/">DC Music</Link>
                </div>

                <Link
                    href="/account/register"
                    className="absolute right-4 top-4 md:right-8 md:top-8"
                >
                    <Button>Create an account</Button>
                </Link>

                <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                    <div className="absolute inset-0 bg-zinc-600 dark:bg-zinc-900" />

                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;One good thing about music, when it hits
                                you, you fell no pain.&rdquo;
                            </p>

                            <footer className="text-sm">Bob Marley</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="p-4 lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold uppercase tracking-tight">
                                Account log in
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                You need an account to make purchases or check
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
        </>
    );
};

export default LoginPage;
