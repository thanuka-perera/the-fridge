import { ChangeEvent } from "react";


export interface Item {
    _id: string;
    title: string;
    expiry: string;
    price?: number
}

export interface AddItem{
    title: string;
    expiry: string;
}


export interface FridgeContextType {
    items: Item[];
    loading: boolean;
    error: string;
    refreshFridge: () => void;
    addItem: (item: AddItem) => Promise<void>;
    deleteItem: (itemId: string) => Promise<void>;
    updateItem: (itemId: string, updatedItem: AddItem) => Promise<void>;
}


export interface formData {
    itemName: string,
    expiryDate: string
}



export interface InputProps {
    label?: string
    emoji?: string
    type?: string
    name?: string
    placeholder?: string
    value?: string
    onChange?:(e: ChangeEvent<HTMLInputElement>) => void;
    className?:string;
}

export interface DeleteConfirmProps{
    
    item: Item;
    onCancel: () => void;
    onConfirm: () => void;
    loading?: boolean;

}

export interface ButtonProps{
    text:string;
    className?:string
    disabled?:boolean
    onClick?:()=>void;
}

export interface ItemProps {
    item:Item,
    onDelete:()=>void
    onClick:()=>void
}

export interface ItemFormProps {
  itemToEdit?: Item | null;
  onClose: () => void;
}
