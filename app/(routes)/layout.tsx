// Components
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <Navbar />

            {children}

            <Footer />
        </section>
    );
}
