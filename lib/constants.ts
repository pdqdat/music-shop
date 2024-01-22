import { Product, Campaigns } from "@/types";

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
    {
        id: "3",
        name: "Fender",
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

export const campaigns: Campaigns[] = [
    {
        id: "1",
        name: "January Sale",
        banner: "/campaign/Jan-Sale-Banner-Extended.jpg",
        description:
            "Our January Sale is a prime time to pick up a bargain on discounted music gear.",
        productID: [],
    },
    {
        id: "2",
        name: "Pioneer DJ Back in Stock",
        banner: "/campaign/pioneer-flx10.jpg",
        description:
            "Pioneer DJ DDJ-FLX10 Digital DJ Controller is now back in stock.",
        productID: [],
    },
    {
        id: "3",
        name: "Fender Acoustasonic Player Telecaster now available.",
        banner: "/campaign/fender-platertele.jpg",
        description:
            "We are offering this guitar for the amazing price of £679 while stocks last. More stock arriving in 10-14 days. Reserve one now!",
        productID: [],
    },
];
