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
        productID: ["5", "19", "22", "30", "32"],
    },
    {
        id: "2",
        name: "Pioneer DJ Back in Stock",
        banner: "/campaign/pioneer-flx10.jpg",
        description:
            "Pioneer DJ DDJ-FLX10 Digital DJ Controller is now back in stock.",
        productID: ["25"],
    },
    {
        id: "3",
        name: "Squier Classic Vibe 60s Telecaster Thinline now available.",
        banner: "/campaign/squier-deal.jpg",
        description:
            "We are offering this guitar for the amazing price of £279 while stocks last. More stock arriving in 10-14 days. Reserve one now!",
        productID: ["40"],
    },
];

export const relatedProducts = [
    {
        id: "1",
        name: "Taylor 110e Dreadnought Electro Acoustic",
        price: 23000000,
        stock: 40,
        sold: 60,
        brandId: "1",
        categoryId: "1",
        imageUrl:
            "https://utfs.io/f/c8e4d2e8-3a11-47e6-a45a-f7a5c532f8ac-d821mn.ssl.cf3.rackcdn.png",
        description:
            "The Taylor 110e pairs layered walnut back and sides with a solid spruce top to make its dreadnought body. For light-to heavy strummers and flatpickers the 110e will push out deep lows, punchy mids, and clear treble notes.",
    },
    {
        id: "4",
        name: "Martin 000-X2E Auditorium Electro Acoustic",
        price: 20800000,
        stock: 25,
        sold: 25,
        brandId: "3",
        categoryId: "1",
        imageUrl:
            "https://utfs.io/f/35d52a3d-b1be-4678-9c07-4290e4c0ec5e-8conww.png",
        description:
            "The Martin 000-X2E comes supplied with a durable and water-resistant gig bag with headstock, bridge, and endpin protectors to ensure that this guitar can be kept safe and dry whilst travelling.",
    },
    {
        id: "37",
        name: "Marshall 1987X Plexi Vintage Reissue 50W Valve Head",
        price: 46100000,
        stock: 12,
        sold: 29,
        brandId: "11",
        categoryId: "5",
        imageUrl:
            "https://utfs.io/f/61d7dd17-05b6-4613-b1e4-3c8148d04cbb-p77nkh.png",
        description:
            "The Marshall 1987X Plexi Head gives you real tube-amp tone in perfect size for playing smaller clubs and venues and for recording and practice.",
    },
    {
        id: "8",
        name: "Yamaha P-225 Digital Piano, White",
        price: 18500000,
        stock: 10,
        sold: 25,
        brandId: "4",
        categoryId: "2",
        imageUrl:
            "https://utfs.io/f/812a0770-2c08-47de-9a5f-997fdae287fb-8conub.png",
        description:
            "The Yamaha P-225 Digital Piano is an exquisitely designed instrument that brings the tactile pleasure of an acoustic piano to a digital platform. Compact, yet powerful, the P-225 is Yamaha’s dedication to unmatched quality and exceptional design.",
    },
];
