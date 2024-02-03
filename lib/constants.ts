import { Product, Campaigns, Category } from "@/types";

export const imagePlaceholder = "https://placehold.co/500";

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
        price: 100000,
        // price: 24000000,
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
        price: 200000,
        // price: 25000000,
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
        price: 300000,
        // price: 36000000,
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
        price: 16600000,
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
        price: 36700000,
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

export const visualNav = [
    {
        image: "/visual-nav/guitar.png",
        name: "Guitar",
        href: "/category/1",
    },
    {
        image: "/visual-nav/keyboard.png",
        name: "Keyboard",
        href: "/category/2",
    },
    {
        image: "/visual-nav/drum.png",
        name: "Drum",
        href: "/category/3",
    }
]