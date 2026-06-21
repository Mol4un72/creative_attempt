import Link from "next/link";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your Creative Attempt account.",
};

/** OAuth / social providers */
const SOCIAL_PROVIDERS = [
  { id: "google", label: "Continue with Google", icon: "/gmail_icon.svg" },
  { id: "apple",  label: "Continue with Apple",  icon: "/apple_icon.svg" },
];

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.card} aria-label="Sign in form">
          <h1 className={styles.heading}>Welcome back</h1>
          <p className={styles.sub}>Sign in to your account to continue.</p>

          {/* ── Social providers ── */}
          <div className={styles.socials}>
            {SOCIAL_PROVIDERS.map(({ id, label, icon }) => (
              <button key={id} id={`login-${id}`} type="button" className={styles.socialBtn}>
                <Image src={icon} alt="" width={20} height={20} />
                {label}
              </button>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className={styles.separator} role="separator" aria-label="or">
            <span className={styles.line} />
            <span className={styles.separatorText}>or</span>
            <span className={styles.line} />
          </div>

          {/* ── Email / Password form ── */}
          <form className={styles.form} noValidate>
            <Input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              label="Email or Username"
              autoComplete="email"
            />
            <Input
              id="login-password"
              type="password"
              placeholder="Your password"
              label="Password"
              autoComplete="current-password"
            />
            <Button id="login-submit" type="submit" size="lg" style={{ width: "100%", marginTop: "0.25rem" }}>
              Sign In
            </Button>
          </form>

          <p className={styles.footerText}>
            Don&apos;t have an account?{" "}
            <Link href="/registration" className={styles.footerLink}>
              Sign up
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
