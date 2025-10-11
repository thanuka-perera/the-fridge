export async function deleteFood(itemId: string) {

  const response = await fetch(`https://thefridge-api.karapincha.io/fridge/${itemId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete item');
  }

  return await response.json();
}
