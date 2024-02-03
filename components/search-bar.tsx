import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Icons
import { Search } from "lucide-react";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const route = useRouter();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            route.push(`/result?keyword=${keyword}`);
        }
    };

    return (
        <div className="flex">
            <Input
                placeholder="Find your sound"
                className="flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
            />

            <Link href={`/result?keyword=${keyword}`}>
                <Button className="ml-2" size="icon" variant="secondary">
                    <Search />
                </Button>
            </Link>
        </div>
    );
};

export default SearchBar;
