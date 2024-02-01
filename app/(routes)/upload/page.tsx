"use client";

import Image from "next/image";
import { useState } from "react";

// Utils
import { UploadDropzone } from "@/lib/uploadThing";

// Components
import { Button } from "@/components/ui/button";

// Icons
import { X } from "lucide-react";

export default function UploadPage() {
    const [imageUrl, setImageUrl] = useState<string>("");

    return (
        <main className="flex flex-col items-center justify-between p-24">
            {imageUrl.length ? (
                <>
                    <div className="relative mt-4 aspect-square w-96 overflow-hidden border">
                        <Image
                            src={imageUrl}
                            alt="Uploaded image"
                            fill
                            className="aspect-square object-contain"
                        />
                    </div>

                    <p className="mt-4">{imageUrl}</p>

                    {/* Button to clear image container */}
                    <Button
                        variant="destructive"
                        size="icon"
                        className="mt-4"
                        onClick={() => setImageUrl("")}
                    >
                        <X />
                    </Button>
                </>
            ) : (
                <UploadDropzone
                    endpoint="imageUploader"
                    appearance={{
                        button: "bg-primary text-primary-foreground hover:bg-primary/90 px-4 mb-4",
                    }}
                    onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        setImageUrl(res[0].url);
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            )}
        </main>
    );
}
