import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import styles from "./page.module.css";
import Link from "next/link";

const featureSteps = [
  { src: "/phone_1.png", alt: "Upload your work", label: "Upload" },
  { src: "/phone_2.png", alt: "Name your artwork", label: "Name" },
  { src: "/phone_3.png", alt: "Sell your creation", label: "Sell!" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Creative Attempt</h1>
          <p className={styles.description}>
            A place to display your creativity. Here you can post your work for
            other users to buy and collect.
          </p>

          <div className={styles.actions}>
            <Link href="#learnmore"><Button  className={styles.secondaryBtn}>Learn More</Button></Link>
            <Link href="/gallery"><Button className={styles.primaryBtn}>Gallery</Button></Link>
          </div>
        </div>
      </main>

      <section className={styles.steps} aria-label="Three simple steps">
        {featureSteps.map(({ src, alt, label }) => (
          <article key={label} className={styles.step}>
            <img id="learnmore" src={src} alt={alt} className={styles.stepImage} />
            <span className={styles.stepLabel}>{label}</span>
          </article>
        ))}
      </section>

      <section className={styles.donate}>
        <h2>Like this site?</h2>
        <p>
          You can support with a donation and help improve the site.
        </p>
        <Button className={styles.primaryBtn}>Donate</Button>
      </section>

      <Footer />
    </div>
  );
}
