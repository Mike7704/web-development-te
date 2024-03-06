import Image from "next/image";
import styles from "@/app/about/about.module.css";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-col m-20 p-5">
        <h1 className={styles.h1About}>About</h1>
        <p className={styles.pAbout}>We use Clerk to make users login and gain access to the application</p>
      </div>
    </>
  );
}
