import Link from "next/link";

export default async function Blogs({ searchParams }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await response.json();

  if (searchParams.user) {
    // Go through array one by one and return that post if the post's userId == searchParam
    posts = posts.filter((post) => post.userId == searchParams.user);
  }

  if (searchParams.sort) {
    posts.reverse();
  }

  return (
    <div>
      <h1>Blog page</h1>
      {posts.map((post) => (
        <div className="pt-3" key={post.id}>
          <h3 className="font-bold underline">{post.title}</h3>
          <p>{post.body}</p>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
      <Link href={`/`}>Back</Link>
    </div>
  );
}
