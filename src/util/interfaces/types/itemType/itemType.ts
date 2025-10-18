export interface Item {
    _id: string;
    title: string;
    expiry: Date | null;
    price?: number;
    createdAt:string;
}

export interface ItemInput {
    _id: string;
    title: string;
    expiry: string;
    price?: number;
    createdAt?:string;
}
