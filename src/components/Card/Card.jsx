"use client";

import styles from "./Card.module.css";
import { useRef } from "react";
import Button from "../Button/Button";

/**
 * Card component — displays an artwork tile.
 *
 * Props:
 *  - art: { id, name, price, time, image }
 *  - variant: "default" | "full"
 *    • "default" → compact grid tile (links to detail page)
 *    • "full"    → expanded detail view with bet UI
 */
export default function Card({ art, variant = "default" }) {
  const { name, price, image } = art;
  const imgRef   = useRef(null);

  const hasMeta = price != null;
  const isFull  = variant === "full";

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {/* ── Image area ── */}
      <div className={styles.imageContainer} >
        <img
          ref={imgRef}
          src={image}
          alt={name}
          className={styles.image}
          crossOrigin="anonymous"
        />
      </div>

      {/* ── Info bar ── */}
      <div className={styles.info}>
        <p className={`${styles.name} ${!hasMeta ? styles.centerName : ""}`}>
          {name}
        </p>

        {hasMeta && (
          <>
            <hr className={styles.hr} />
            <div className={styles.details}>
              <span className={styles.price}>{price}$</span>
            </div>
          </>
        )}
      </div>

      {/* ── Bet block (full variant only) ── */}
      {isFull && (
        <div className={styles.betBlock}>
          <Button className={styles.betBtn} type="button" size="md">
            Buy
          </Button>
        </div>
      )}
    </article>
  );
}