import { Item,AddItem } from '@/util'

export interface FridgeContextType {
    items: Item[];
    loading: boolean;
    error: string;
    setError:(error:string)=> void,
    refreshFridge: () => void;
    addItem: (item: AddItem) => Promise<void>;
    deleteItem: (itemId: string) => Promise<void>;
    updateItem: (itemId: string, updatedItem: AddItem) => Promise<void>;
}