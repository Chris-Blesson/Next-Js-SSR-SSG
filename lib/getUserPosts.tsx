export default async function getUserPosts(userId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60 } });

  if (!response.ok) return undefined;;

  return response.json()
}
