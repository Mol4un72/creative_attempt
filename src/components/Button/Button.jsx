import styles from "./Button.module.css";

/**
 * Reusable Button component.
 * Supports: variant ("primary" | "secondary" | "ghost"), size ("sm" | "md" | "lg"),
 * and all native button attributes via rest props spread.
 */
export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}) {
  return (
    <button
      type={type}
      className={[styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
