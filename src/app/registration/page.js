import Link from "next/link";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Sign Up",
  description: "Create a new Creative Attempt account.",
};

const SOCIAL_PROVIDERS = [
  { id: "google", label: "Continue with Google", icon: "/gmail_icon.svg" },
  { id: "apple",  label: "Continue with Apple",  icon: "/apple_icon.svg" },
];

export default function RegistrationPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.card} aria-label="Registration form">
          <h1 className={styles.heading}>Create account</h1>
          <p className={styles.sub}>Join Creative Attempt today — it&apos;s free.</p>

          {/* ── Social providers ── */}
          <div className={styles.socials}>
            {SOCIAL_PROVIDERS.map(({ id, label, icon }) => (
              <button key={id} id={`register-${id}`} type="button" className={styles.socialBtn}>
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

          {/* ── Registration form ── */}
          <form className={styles.form} noValidate>
            <Input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              label="Email or Username"
              autoComplete="email"
            />
            <Input
              id="register-password"
              type="password"
              placeholder="Create a password"
              label="Password"
              autoComplete="new-password"
            />
            <Input
              id="register-password-confirm"
              type="password"
              placeholder="Repeat your password"
              label="Confirm Password"
              autoComplete="new-password"
            />
            <Button id="register-submit" type="submit" size="lg" style={{ width: "100%", marginTop: "0.25rem" }}>
              Sign Up
            </Button>
          </form>

          <p className={styles.footerText}>
            Already have an account?{" "}
            <Link href="/login" className={styles.footerLink}>
              Sign in
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
