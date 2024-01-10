export default async function getPost(slug) {
  const result = await fetch(`https://dummyjson.com/products/${slug}`);

  return result.json();
}
