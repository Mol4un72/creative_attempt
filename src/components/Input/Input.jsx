import styles from "./Input.module.css";

export default function Input({ placeholder, type = "text", ...props }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} {...props} />
  );
}
