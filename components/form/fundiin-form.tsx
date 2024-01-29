"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";

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
} from "@/components/ui/form";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface FundiinFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
    type: z.enum(["website", "qr"], {
        required_error: "You need to select a display method.",
    }),
});

export function FundiinForm({ className, ...props }: FundiinFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // setIsLoading(true);
        toast("You selected the following display method: " + values.type);
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
                                <FormLabel>Display method</FormLabel>

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
                                                Website (desktop / mobile app)
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="qr" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                QR Code pay (smart TV / Kiot)
                                            </FormLabel>
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
        </div>
    );
}
