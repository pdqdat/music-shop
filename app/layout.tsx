import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";

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
            <body className={inter.className}>
                <TooltipProvider>
                    <Navbar />

                    {children}

                    <Footer />
                </TooltipProvider>
            </body>
        </html>
    );
}
