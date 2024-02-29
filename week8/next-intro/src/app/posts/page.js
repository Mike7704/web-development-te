import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await sql`
    SELECT * FROM posts;
  `;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.rows.map((post) => (
          <div className="pt-3" key={post.id}>
            <li className="font-bold underline">{post.title}</li>
            <Link href={`/posts/${post.id}`}>View Post</Link>
          </div>
        ))}
      </ul>
      <div className="pt-3">
        <Link href={`/posts/new`}>Add Post</Link>
      </div>
      <div>
        <Link href={`/`}>Back</Link>
      </div>
    </div>
  );
}
