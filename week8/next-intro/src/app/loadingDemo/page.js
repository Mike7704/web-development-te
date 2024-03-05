import Link from "next/link";
import styles from "@/app/page.module.css";

export default function LoadingDemo() {
  return (
    <div className={styles.main}>
      <h1>Page Loading Demo</h1>
      <Link href="/loadingDemo/slow">Slow Loading Page</Link>
      <Link href="/loadingDemo/fast">Fast Loading Page</Link>
      <Link href="/">Back</Link>
    </div>
  );
}
