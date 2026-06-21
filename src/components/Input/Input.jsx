import styles from "./Input.module.css";

/**
 * Reusable Input component.
 * Forwards all native input attributes via rest props spread.
 */
export default function Input({
  placeholder,
  type = "text",
  label,
  id,
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
      <input
        id={id}
        className={`${styles.input} ${className}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
