import Link from "next/link";

export const metadata = {
  title: "About - Next.js",
  description: "A simple blog built with Next.js",
};

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>Static routes by naming a folder inside out ./app and visiting that url</p>
      <Link href={`/`}>Back</Link>
    </div>
  );
}
