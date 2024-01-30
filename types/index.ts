export interface Category {
    id: string;
    name: string;
    description: string;
}

export interface Brand {
    id: string;
    name: string;
    image: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    sold: number;
    brandId: string;
    categoryId: string;
    imageUrl: string;
    description: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Campaigns {
    id: string;
    name: string;
    banner: string;
    description: string;
    productID: string[];
}
