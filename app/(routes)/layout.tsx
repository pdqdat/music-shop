// Components
import Navbar from "@/components/navbar/navbar";
import BrandSection from "@/components/layout/brand-section";
import QuoteSection from "@/components/layout/quote-section";
import SocialSection from "@/components/layout/social-section";
import Footer from "@/components/layout/footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Navbar />

            {children}

            <BrandSection />
            <QuoteSection />
            <SocialSection />

            <Footer />
        </section>
    );
}
