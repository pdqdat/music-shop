import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
            <h1 className="text-6xl font-bold text-center">Welcome to DC Music</h1>

            <div className="flex flex-col space-y-2">
                <Button>Log in</Button>
                
                <Button variant={"outline"}>Sign up</Button>
            </div>
        </main>
    );
}
