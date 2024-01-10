export default async function getAllPost() {
  const result = await fetch("https://dummyjson.com/products");

  return result.json();
}
