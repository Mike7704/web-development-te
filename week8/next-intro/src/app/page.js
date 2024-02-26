import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next App Demo</h1>
      <p>This is the home page</p>
      <Link href="/about">About Page</Link>
      <Link href="/blog">Blog Page</Link>
    </main>
  );
}
