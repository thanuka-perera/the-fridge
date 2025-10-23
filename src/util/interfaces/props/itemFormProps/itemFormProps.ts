import { ItemInput } from '@/util'

export interface ItemFormProps {
  itemToEdit?: ItemInput | null;
  onClose: () => void;
  onConfirm:()=>void
  setUpdatedItem?: React.Dispatch<React.SetStateAction<ItemInput | null >>;
}
