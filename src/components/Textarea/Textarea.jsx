import styles from "./Textarea.module.css";

/**
 * Reusable Textarea component.
 * Forwards all native textarea attributes via rest props spread.
 */
export default function Textarea({
  placeholder,
  label,
  id,
  rows = 5,
  className = "",
  ...props
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${styles.textarea} ${className}`}
        placeholder={placeholder}
        rows={rows}
        {...props}
      />
    </div>
  );
}