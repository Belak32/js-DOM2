export async function fetchImages(page) {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`);
  return await response.json();
}