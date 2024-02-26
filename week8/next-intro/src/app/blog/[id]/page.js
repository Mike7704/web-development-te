import Link from "next/link";

export default async function Page({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const postInfo = await response.json();

  return (
    <div>
      <h3>More about that most...</h3>
      <p>Title: {postInfo.title}</p>
      <p>Body: {postInfo.body}</p>
      <Link href={`/blog`}>Back</Link>
    </div>
  );
}
