import { AddItem } from '@/util';

export async function updateFood(itemId:string,updatedItem: AddItem){

  const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}fridge/${itemId}`, {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)

      });

      if (!res.ok) throw new Error('Failed to update item');

}