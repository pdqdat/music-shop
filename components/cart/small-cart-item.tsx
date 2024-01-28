import Image from "next/image";
import Link from "next/link";

// Hooks

// Icons

// Types
import { CartItem } from "@/types";

// Components
import Currency from "@/components/currency";

interface SmallCartItemProps {
    data: CartItem;
}

const SmallCartItem: React.FC<SmallCartItemProps> = ({ data }) => {
    return (
        <li className="flex border-b py-6">
            <div className="relative aspect-square overflow-hidden rounded-xl border sm:w-24">
                <Link href={`/product/${data.id}`}>
                    <Image
                        src={data.images[0]}
                        alt="Cart item image"
                        fill
                        className="aspect-square rounded-lg object-contain duration-300 ease-in-out hover:scale-110"
                    />
                </Link>
            </div>

            <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div className="flex justify-between">
                    <p className="font-semibold">{data.name}</p>
                </div>

                <Currency value={data.price} className="pt-2 text-lg" />
            </div>
        </li>
    );
};

export default SmallCartItem;
