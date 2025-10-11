import { Item } from '@/util'

export interface ItemFormProps {
  itemToEdit?: Item | null;
  onClose: () => void;
}
