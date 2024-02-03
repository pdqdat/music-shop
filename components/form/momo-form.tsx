"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import QRCode from "qrcode";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { cn } from "@/lib/utils";

// Hooks
import { useForm } from "react-hook-form";
import useCart from "@/hooks/use-cart";
import useCheckoutData from "@/hooks/use-checkout";

// Icons
import { Loader2 } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface MomoFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
    type: z.enum(["website", "qr"], {
        required_error: "You need to select a display method.",
    }),
});

export function MomoForm({ className, ...props }: MomoFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [qrCodeUrl, setQrCodeUrl] = React.useState<string | null>(null);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        city,
        district,
        ward,
        address,
    } = useCheckoutData();
    const cartItems = useCart((state) => state.items);

    const cart = useCart();
    const { clearCheckoutData } = useCheckoutData();

    const totalMoney = cartItems.reduce((total, item) => {
        return total + Number(item.price * item.quantity);
    }, 0);

    const items = cartItems.map((item) => ({
        productId: item.id,
        price: item.price,
        quantity: item.quantity,
    }));

    const paymentMethod = "MOMO";

    let myuuid = uuidv4();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        toast.loading("Your order is being processed...");

        const orderInfo = {
            firstName,
            lastName,
            phoneNumber,
            email,
            city,
            district,
            ward,
            address,
            paymentMethod,
            totalMoney,
            items,
            request_id: myuuid,
        };

        axios
            .post("http://localhost:8080/order/api/place_order", orderInfo)
            .then((response) => {
                console.log(response);

                const { orderId, paymentUrl, qrData } = response.data.data;

                toast.dismiss();
                toast.success(
                    `Order placed successfully! Your order ID is ${orderId}.`,
                );

                // Empty the cart after the order is placed
                cart.removeAll();
                // Clear checkout data after the order is placed
                clearCheckoutData();

                if (values.type === "website") {
                    // Count down from 5 seconds
                    let counter = 5;
                    const toastId = toast(
                        `You will be redirected to the payment page in ${counter} seconds`,
                    );

                    const intervalId = setInterval(() => {
                        counter--;
                        if (counter > 0) {
                            toast(
                                `You will be redirected to the payment page in ${counter} seconds`,
                                {
                                    id: toastId,
                                },
                            );
                        } else {
                            clearInterval(intervalId);
                        }
                    }, 1000);

                    // Redirect to payment url after 5 seconds
                    setTimeout(() => {
                        window.open(paymentUrl, "_blank");
                    }, 5000);
                }
                // if user choose qr code display option
                else {
                    QRCode.toDataURL(qrData).then(setQrCodeUrl);
                    setDialogOpen(true);
                }
            })
            .catch(() => {
                toast.error("Something went wrong! Please try again.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4"
                >
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Display options</FormLabel>

                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="website" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                WebPay
                                            </FormLabel>

                                            <FormDescription>
                                                Applies on the website
                                                (Desktop/Mobile) platform
                                            </FormDescription>
                                        </FormItem>

                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="qr" />
                                            </FormControl>

                                            <FormLabel className="font-normal">
                                                QRCode Pay
                                            </FormLabel>

                                            <FormDescription>
                                                Applies on SmartTv/Kiot/Smart
                                                Phone/Tablet platform
                                            </FormDescription>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isLoading}>
                        {isLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Place my Order
                    </Button>
                </form>
            </Form>

            {/* QR code display dialog */}
            <Dialog open={dialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pay with Momo by QR code</DialogTitle>
                    </DialogHeader>

                    <div className="relative aspect-square w-full">
                        {qrCodeUrl ? (
                            <Image
                                src={qrCodeUrl || ""}
                                alt="Qr code"
                                fill
                                className="aspect-square object-contain"
                            />
                        ) : (
                            <p>No QR code available. Please try again.</p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button onClick={() => setDialogOpen(false)}>
                            Done
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
