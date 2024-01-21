import { Product } from "@/types";

export const departments = [
    "Guitar",
    "Electric Guitar",
    "Bass",
    "Drum",
    "Keyboard",
    "Accessories",
];

export const products: Product[] = [
    {
        id: "1",
        name: "Taylor 112ce-S Grand Concert Electro Acoustic, Sapele",
        price: 976,
        images: [
            {
                url: "/taylor/taylor1.png",
            },
            {
                url: "/taylor/taylor2.png",
            },
            {
                url: "/taylor/taylor3.png",
            },
        ],
        department: {
            name: "Guitar",
        },
    },
    {
        id: "2",
        name: "Fender Aerodyne Special Stratocaster HSS, Dolphin Gray Metallic",
        price: 999,
        images: [
            {
                url: "/fender/fender1.png",
            },
            {
                url: "/fender/fender2.png",
            },
            {
                url: "/fender/fender3.png",
            },
            {
                url: "/fender/fender4.png",
            },
            {
                url: "/fender/fender5.png",
            },
        ],
        department: {
            name: "Electric Guitar",
        },
    },
];
