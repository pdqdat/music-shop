import Link from "next/link";

// Components
import MainNav from "@/components/main-nav";
import Container from "@/components/container";
import NavbarActions from "@/components/navbar-actions";

const Navbar = () => {
    const categories = ["Guitar", "Bass", "Drum", "Keyboard", "Accessories"];

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">DC MUSIC</p>
                    </Link>

                    <MainNav data={categories} />

                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
