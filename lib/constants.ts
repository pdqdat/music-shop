import { Product, Campaigns, Category } from "@/types";

export const categories: Category[] = [
    { id: "1", name: "Guitar" },
    { id: "2", name: "Electric Guitar" },
    { id: "3", name: "Bass" },
    { id: "4", name: "Drum" },
    { id: "5", name: "Keyboard" },
    { id: "6", name: "Accessories" },
    { id: "7", name: "DJ" },
];

export const products: Product[] = [
    {
        id: "1",
        name: "Taylor 112ce-S Grand Concert Electro Acoustic, Sapele",
        price: 976,
        images: [
            "/taylor/taylor1.png",
            "/taylor/taylor2.png",
            "/taylor/taylor3.png",
        ],
        category: {
            id: "1",
            name: "Guitar",
        },
        stock: 20,
    },
    {
        id: "2",
        name: "Fender Aerodyne Special Stratocaster HSS, Dolphin Gray Metallic",
        price: 999,
        images: [
            "/fender/fender1.png",
            "/fender/fender2.png",
            "/fender/fender3.png",
            "/fender/fender4.png",
            "/fender/fender5.png",
        ],
        category: {
            id: "2",
            name: "Electric Guitar",
        },
        stock: 20,
    },
    {
        id: "3",
        name: "Pioneer DJ DDJ-FLX10 Digital DJ Controller",
        price: 1469,
        images: [
            "/pioneer/pioneer1.png",
            "/pioneer/pioneer2.png",
            "/pioneer/pioneer3.png",
            "/pioneer/pioneer4.png",
            "/pioneer/pioneer5.png",
        ],
        category: {
            id: "7",
            name: "DJ",
        },
        stock: 20,
    },
    {
        id: "4",
        name: "Fender Acoustasonic Player Telecaster, Butterscotch Blonde",
        price: 679,
        images: [
            "/fenderA/fenderA1.png",
            "/fenderA/fenderA2.png",
            "/fenderA/fenderA3.png",
            "/fenderA/fenderA4.png",
        ],
        category: {
            id: "2",
            name: "Electric Guitar",
        },
        stock: 20,
    },
    {
        id: "5",
        name: "Yamaha YC61 Stage Keyboard and Drawbar Organ",
        price: 1499,
        images: [
            "/keyboard/keyboard1.png",
            "/keyboard/keyboard2.png",
            "/keyboard/keyboard3.png",
            "/keyboard/keyboard4.png",
            "/keyboard/keyboard5.png",
        ],
        category: {
            id: "5",
            name: "Keyboard",
        },
        stock: 0,
    },
];

export const campaigns: Campaigns[] = [
    {
        id: "1",
        name: "January Sale",
        banner: "/campaign/Jan-Sale-Banner-Extended.jpg",
        description:
            "Our January Sale is a prime time to pick up a bargain on discounted music gear.",
        productID: ["1", "2"],
    },
    {
        id: "2",
        name: "Pioneer DJ Back in Stock",
        banner: "/campaign/pioneer-flx10.jpg",
        description:
            "Pioneer DJ DDJ-FLX10 Digital DJ Controller is now back in stock.",
        productID: ["3"],
    },
    {
        id: "3",
        name: "Fender Acoustasonic Player Telecaster now available.",
        banner: "/campaign/fender-platertele.jpg",
        description:
            "We are offering this guitar for the amazing price of £679 while stocks last. More stock arriving in 10-14 days. Reserve one now!",
        productID: ["4"],
    },
];
