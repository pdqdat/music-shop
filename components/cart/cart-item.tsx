import Image from "next/image";
import Link from "next/link";

// Hooks
import useCart from "@/hooks/use-cart";

// Icons
import { X } from "lucide-react";

// Types
import { Product } from "@/types";

// Components
import { Button } from "@/components/ui/button";
import Currency from "@/components/currency";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id);
    };

    return (
        <li className="flex border-b py-6">
            <div className="relative aspect-square w-24 overflow-hidden rounded-xl border sm:h-48 sm:w-48">
                <Link href={`/product/${data.id}`}>
                    <Image
                        src={data.images[0]}
                        alt="Cart item image"
                        fill
                        className="aspect-square rounded-lg object-contain duration-300 ease-in-out hover:scale-110"
                    />
                </Link>
            </div>

            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute right-0 top-0 z-10">
                    <Button
                        className="rounded-full"
                        variant="ghost"
                        size="icon"
                        onClick={onRemove}
                    >
                        <X size={20} />
                    </Button>
                </div>

                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className=" text-lg font-semibold">{data.name}</p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <p className="ml-4 border-l pl-4 text-muted-foreground">
                            {data.department.name}
                        </p>
                    </div>

                    <Currency value={data.price} className="pt-2" />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
