import { Item } from '@/util'

export interface ItemProps {
    itemDetails:Item,
    onClick:()=>void,
    onDelete:()=>void
}