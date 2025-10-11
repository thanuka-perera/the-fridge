import { AddItem } from "@/util";

export async function updateFood(itemId:string,updatedItem: AddItem){
  const res=await fetch(`https://thefridge-api.karapincha.io/fridge/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem)
      });
      if (!res.ok) throw new Error("Failed to update item");
}