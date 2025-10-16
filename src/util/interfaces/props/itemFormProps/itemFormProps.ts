import { Item } from '@/util'

export interface ItemFormProps {
  itemToEdit?: Item | null;
  onClose: () => void;
  onConfirm:()=>void
  setUpdatedItem?: React.Dispatch<React.SetStateAction<Item | null >>;
}
