import Link from "next/link";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./page.module.css";
import Header from "../../components/Header/Header"

export default function RegistrationPage() {
  return (
    <main className={styles.registrationPage}>
      <Header />
      <section className={styles.card}>
        <Button className={styles.emailButton} type="button">
          Continue with Email
        </Button>

        <Button className={styles.socialButton} type="button">
          <img src="/gmail_icon.svg" alt="Google icon" className={styles.icon} />
          Continue with Google
        </Button>

        <Button className={styles.socialButton} type="button">
          <img src="/apple_icon.svg" alt="Apple icon" className={styles.icon} />
          Continue with Apple
        </Button>

        <div className={styles.separator}>
          <span className={styles.line} />
          <span className={styles.separatorText}>or</span>
          <span className={styles.line} />
        </div>

        <form className={styles.form}>
          <Input placeholder="Username or Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat password" />
          <Button className={styles.submitButton} type="submit">
            Sign up
          </Button>
        </form>

        <p className={styles.registerText}>
          Have an account?{' '}
          <Link href="/login" className={styles.registerLink}>
            Sign in!
          </Link>
        </p>
      </section>
    </main>
  );
}
