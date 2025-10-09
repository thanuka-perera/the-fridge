import { AddItem } from "../interfaces/fridge";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function fetchItems() {

  const response = await fetch(`${baseUrl}fridge`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error("Failed to fetch items")
  }

  return await response.json()
}

export async function saveItem(item: AddItem) {

  const res = await fetch('https://thefridge-api.karapincha.io/fridge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });

  if (!res.ok) throw new Error("Failed to add item");
}

export async function deleteItem(itemId: string) {

  const response = await fetch(`https://thefridge-api.karapincha.io/fridge/${itemId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete item');
  }

  return await response.json();
}

export async function removeItem(itemId:string){
  const res = await fetch(`https://thefridge-api.karapincha.io/fridge/${itemId}`, {
        method: 'DELETE',
      });
  if (!res.ok) throw new Error("Failed to delete item");
}


export async function updateItem2(itemId:string,updatedItem: AddItem){
  const res=await fetch(`https://thefridge-api.karapincha.io/fridge/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)
      });
      if (!res.ok) throw new Error("Failed to update item");
}