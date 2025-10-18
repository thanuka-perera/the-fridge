import { Item } from '@/util'

export interface ConfirmDeleteProps{ 

    itemToDelete: Item;
    onConfirm: () => void;
    onClose: () => void;
    loading?: boolean;
    
}