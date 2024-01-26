// Components
import AdminNavbar from "@/components/admin-navbar/admin-navbar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <AdminNavbar />

            {children}
        </section>
    );
}
