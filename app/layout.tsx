import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { fundiinProductConfig } from "@/lib/fundiin-config";

// Providers
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import ToastProvider from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DC Music",
    description: "A music shop based in Sai Gon, Viet Nam",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `var fundiinProductConfig = ${JSON.stringify(fundiinProductConfig)};`,
                    }}
                />

                <script
                    type="application/javascript"
                    crossOrigin="anonymous"
                    src="https://gateway-sandbox.fundiin.vn/merchants/productjs/FD200000165745.js"
                ></script>
            </head>

            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>{children}</TooltipProvider>

                    <ToastProvider />
                </ThemeProvider>
            </body>
        </html>
    );
}
