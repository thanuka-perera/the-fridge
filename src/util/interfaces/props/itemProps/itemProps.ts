import { Item } from '@/util'

export interface ItemProps {
    itemDetails:Item,
    onDelete:()=>void
    onClick:()=>void
}