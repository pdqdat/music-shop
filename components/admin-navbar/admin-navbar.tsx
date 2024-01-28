import Link from "next/link";

// Icons
import { User } from "lucide-react";

// Constants
import { categories } from "@/lib/constants";

// Components
import Container from "@/components/container";
import AdminMainNav from "./admin-main-nav";
import { Button } from "@/components/ui/button";

const AdminNavbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                        <p className="text-xl font-bold">DC MUSIC</p>
                    </Link>

                    <AdminMainNav data={categories} />

                    <div className="ml-auto flex items-center gap-x-2">
                        <Link
                            href="/account/login"
                            className="ml-4 flex gap-x-2 lg:ml-0"
                        >
                            <Button
                                className="rounded-full text-sm font-medium"
                                variant="ghost"
                                size="icon"
                            >
                                <User size={20} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminNavbar;
