import styles from "./Button.module.css";

export default function Button({ children, className, type = "button", ...props }) {
  return (
    <button type={type} className={`${styles.button} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
