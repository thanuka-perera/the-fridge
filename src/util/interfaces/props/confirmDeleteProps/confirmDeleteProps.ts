import { Item } from '@/util'

export interface ConfirmDeleteProps{ 
    itemToDelete: Item;
    onCancel: () => void;
    onConfirm: () => void;
    loading?: boolean;
}