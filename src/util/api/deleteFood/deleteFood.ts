export async function deleteFood(itemId: string) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}fridge/${itemId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete item');
  }

  return await response.json();
}
