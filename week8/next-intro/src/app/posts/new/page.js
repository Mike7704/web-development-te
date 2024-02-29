import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function PostsPage() {
  async function handleSavePost(formData) {
    "use server"; // makes this function run _on the server_, as if by magic API.
    console.log("Saving post to the database...");

    // get the form data from the formData object next provdides
    const title = formData.get("title");
    const content = formData.get("content");

    // insert the data into postgres
    await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
    console.log("Post saved!");

    // revalidate the posts page, so it fetches the new data
    revalidatePath("/posts");

    // redirect the user to the posts page
    redirect("/posts");
  }

  return (
    <div>
      <h1>Add a new post</h1>
      <form action={handleSavePost}>
        <label className="p-3" htmlFor="title">
          Title
        </label>
        <input className="text-black" id="title" name="title" type="text" />
        <label className="p-3" htmlFor="content">
          Content
        </label>
        <textarea className="text-black" id="content" name="content" />
        <button className="p-3" type="submit">
          Submit
        </button>
        {/*<SavePostButton className="p-3" />*/}
      </form>
      <div className="pt-3">
        <Link href={`/posts`}>Back</Link>
      </div>
    </div>
  );
}
