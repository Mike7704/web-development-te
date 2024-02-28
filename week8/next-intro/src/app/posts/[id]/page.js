import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Post({ params }) {
  const postInfo = await sql`
  SELECT * FROM posts WHERE id = ${params.id};
`;

  return (
    <div>
      <h3>More about that post...</h3>
      <p>Title: {postInfo.rows[0].title}</p>
      <p>Body: {postInfo.rows[0].content}</p>
      <Link href={`/posts`}>Back</Link>
    </div>
  );
}
