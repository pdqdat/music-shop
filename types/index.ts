export interface Category {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    images: string[];
    category: Category;
    stock: number;
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
