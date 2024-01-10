import getAllPost from "@/lib/getAllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await getAllPost();
  return (
    <main className="py-10">
      <div className="mx-auto flex w-3/4">
        <div className="grid grid-cols-4 gap-8">
          {posts.products.map((res) => {
            return (
              <Link href={`/${res.id}`}>
                <div className="flex flex-col shadow-xl gap-4">
                  <img src={res.thumbnail} alt="" />
                  <span>{res.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
