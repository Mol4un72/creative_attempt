import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Creative Attempt — Meme Collecting Platform",
  description:
    "A place to display your creativity. Post, collect and sell your artwork on Creative Attempt.",
};

/** Three‑step "how it works" section data */
const HOW_IT_WORKS = [
  { src: "/phone_1.png", alt: "Upload your artwork", step: "01", label: "Upload" },
  { src: "/phone_2.png", alt: "Name and price it",   step: "02", label: "Name"   },
  { src: "/phone_3.png", alt: "Sell your creation",  step: "03", label: "Sell!"  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      {/* ── Hero ── */}
      <main className={styles.hero} id="top">
        {/* blurred background image — CSS pseudo-element */}
        <div className={styles.heroBg} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Meme collecting platform</span>
          <h1 className={styles.title}>Creative<br />Attempt</h1>
          <p className={styles.description}>
            A place to display your creativity. Post your work for
            other users to buy and collect.
          </p>

          <div className={styles.actions}>
            <Link href="/gallery">
              <Button size="lg">Browse Gallery</Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="secondary">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* ── How it Works ── */}
        <div className={styles.steps} id="how-it-works" aria-label="How it works">
          <div className={styles.stepsGrid}>
            {HOW_IT_WORKS.map(({ src, alt, step, label }) => (
              <article key={step} className={styles.step}>
                <div className={styles.stepImageWrap}>
                  <img src={src} alt={alt} className={styles.stepImage} />
                </div>
                <span className={styles.stepLabel}>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* ── Donate / Support ── */}
      <section className={styles.donate} aria-label="Support the project">
        <div className={styles.donateGlow} aria-hidden="true" />
        <h2 className={styles.donateTitle}>Like this project?</h2>
        <p className={styles.donateSub}>
          You can support with a donation and help improve the site.
        </p>
        <Button size="lg">Donate ☕</Button>
      </section>

      <Footer />
    </div>
  );
}
