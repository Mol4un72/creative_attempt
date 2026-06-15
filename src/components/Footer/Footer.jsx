import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <Image
          src="/logo.png"
          alt="Creative Attempt"
          width={180}
          height={60}
        />
        <p className={styles.subtitle}>
          Cretive Attempt
        </p>
        <p className={styles.subtitle}>
          meme collecting platform
        </p>
      </div>

      <div className={styles.column}>
        <h3>Gallery</h3>
        <Link href="/">Category 1</Link>
        <Link href="/">Category 2</Link>
        <Link href="/">Category 3</Link>
        <Link href="/">Category 4</Link>
        <Link href="/">Category 5</Link>
      </div>

      <div className={styles.column}>
        <h3>Create</h3>
        <Link href="/create">Create card</Link>
      </div>

      <div className={styles.column}>
        <h3>Contact us</h3>
        <Link href="/contact-us">Contact us form</Link>
      </div>
    </footer>
  );
}