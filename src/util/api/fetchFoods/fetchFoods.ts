export async function fetchFoods() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}fridge`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Failed to fetch items')
  }

  return await response.json()
}