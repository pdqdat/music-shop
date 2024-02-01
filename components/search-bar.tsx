// Icons
import { Search } from "lucide-react";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
    return (
        <div className="flex">
            <Input
                placeholder="Find your sound"
                className="flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Button className="ml-2" size="icon" variant="secondary">
                <Search />
            </Button>
        </div>
    );
};

export default SearchBar;
