import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next App Demo</h1>
      <p>This is the home page</p>
      <Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
      <Link href="/about">About Page</Link>
      <Link href="/blog">Blog Page</Link>
      <Link href="/posts">Posts Page</Link>
      <Link href="/animatedPage">Animated Page</Link>
    </main>
  );
}
