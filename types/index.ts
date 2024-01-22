export interface Department {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    images: string[];
    department: Department;
    stock: number;
}

export interface Campaigns {
    id: string;
    name: string;
    banner: string;
    description: string;
    productID: string[];
}
