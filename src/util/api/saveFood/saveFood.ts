import { AddItem } from '@/util';

export async function saveFood(item: AddItem) {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}fridge`, {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)

  });

  if (!res.ok) throw new Error('Failed to add item');

}