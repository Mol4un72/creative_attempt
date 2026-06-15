import styles from "./Textarea.module.css";

export default function Textarea({ placeholder }) {
  return (
    <textarea className={styles.input} placeholder={placeholder}></textarea>
  );
}