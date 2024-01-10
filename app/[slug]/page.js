import getPost from "@/lib/getPost";

export default async function page({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  return <div>{post.title}</div>;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
  };
}
