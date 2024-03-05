import { sql } from "@vercel/postgres";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Post({ params }) {
  const postInfo = await sql`
  SELECT * FROM posts WHERE id = ${params.id};
`;

  // if there is no post, run the notFound function to show the not-found.jsx page.
  if (!postInfo.rows?.[0]) {
    notFound();
  }

  /*
  // Trigger an error to test error page
  function errorPageTest() {
    // the error always throws because we're deliberately causing a problem
    // maybe we didn't get a param and this page will not work without it
    throw new Error("I deliberately broke this page, because I'm a bad person");
    return <div>My page content</div>;
  }
  errorPageTest();*/

  return (
    <div>
      <h3>More about that post...</h3>
      <p>Title: {postInfo.rows[0].title}</p>
      <p>Body: {postInfo.rows[0].content}</p>
      <Link href={`/posts`}>Back</Link>
    </div>
  );
}
