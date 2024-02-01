"use client";

import { UploadDropzone } from "@/lib/uploadThing";
import Image from "next/image";
import { useState } from "react";

export default function UploadPage() {
    const [imageUrl, setImageUrl] = useState<string>("");

    return (
        <main className="flex flex-col items-center justify-between p-24">
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

            {/* Display the image after loading it */}
            {imageUrl.length ? (
                <>
                    <div className="relative mt-4 aspect-square overflow-hidden border">
                        <Image
                            src={imageUrl}
                            alt="Uploaded image"
                            fill
                            className="aspect-square object-contain"
                        />
                    </div>

                    <h1 className="mt-4">{imageUrl}</h1>
                </>
            ) : null}
        </main>
    );
}
