const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function fetchFoods() {

  const response = await fetch(`${baseUrl}fridge`, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error("Failed to fetch items")
  }

  return await response.json()
}