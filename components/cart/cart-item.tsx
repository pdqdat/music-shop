import Image from "next/image";
import Link from "next/link";

// Hooks
import useCart from "@/hooks/use-cart";
import { useInfoStore } from "@/hooks/use-info";

// Icons
import { X, Minus, Plus } from "lucide-react";

// Types
import { CartItem } from "@/types";

// Components
import { Button } from "@/components/ui/button";
import Currency from "@/components/currency";
import { Badge } from "../ui/badge";

interface CartItemProps {
    data: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart();
    const categories = useInfoStore((state) => state.categories);

    const onRemove = () => {
        cart.removeItem(data.id);
    };

    const onIncreaseQuantity = () => {
        cart.increaseQuantity(data.id);
    };

    const onDecreaseQuantity = () => {
        cart.decreaseQuantity(data.id);
    };

    // Find product category from categories list
    const productCategory =
        categories.find((category) => category.id == data?.categoryId);

    return (
        <li className="flex border-b py-6">
            <div className="relative aspect-square w-24 overflow-hidden rounded-xl border sm:w-48">
                <Link href={`/product/${data.id}`}>
                    <Image
                        src={data.imageUrl}
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
                        <p className="text-lg font-semibold">{data.name}</p>
                    </div>

                    <div className="mt-1 flex text-sm">
                        <div className="ml-4 border-l pl-4">
                            <p className="text-muted-foreground">
                                {productCategory?.name}
                            </p>

                            {/* Quantity controllers */}
                            <div className="mt-2 flex items-center space-x-1">
                                <Button
                                    variant="ghost"
                                    className="h-6 w-6 rounded-full p-0"
                                    size="icon"
                                    onClick={onDecreaseQuantity}
                                >
                                    <Minus size={15} />
                                </Button>

                                <Badge className="text-sm">
                                    {data.quantity}
                                </Badge>

                                <Button
                                    variant="ghost"
                                    className="h-6 w-6 rounded-full p-0"
                                    size="icon"
                                    onClick={onIncreaseQuantity}
                                >
                                    <Plus size={15} />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Currency value={data.price} className="pt-2" />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
