export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface Department {
    // id: string;
    name: string;
}

export interface ProductImages {
    url: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    images: ProductImages[];
    department: Department;
}

export interface Campaigns {
    id: string;
    name: string;
    banner: string;
    description: string;
    productID: string[];
}
