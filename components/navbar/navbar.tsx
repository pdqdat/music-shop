import Link from "next/link";

// Constants
import { categories } from "@/lib/constants";

// Components
import MainNav from "@/components/navbar/main-nav";
import Container from "@/components/container";
import NavbarActions from "@/components/navbar/navbar-actions";

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                        <p className="text-xl font-bold">DC MUSIC</p>
                    </Link>

                    <MainNav data={categories} />

                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
