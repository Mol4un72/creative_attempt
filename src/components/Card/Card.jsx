"use client";

import styles from "./Card.module.css";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";
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
  const { name, price, time, image } = art;
  const imgRef   = useRef(null);
  const [bgColor, setBgColor] = useState("transparent");

  const hasMeta = price != null && time != null;
  const isFull  = variant === "full";

  /* ── Extract dominant colour from artwork image ── */
  useEffect(() => {
    const fac = new FastAverageColor();
    const img = imgRef.current;
    if (!img) return;

    const extract = () => {
      try {
        const color = fac.getColor(img);
        // Darken the extracted colour slightly for a nicer bg
        setBgColor(color.rgb);
      } catch {
        /* silently ignore cross-origin images */
      }
    };

    if (img.complete) {
      extract();
    } else {
      img.addEventListener("load", extract);
    }

    return () => {
      img.removeEventListener("load", extract);
      fac.destroy?.();
    };
  }, [image]);

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {/* ── Image area ── */}
      <div className={styles.imageContainer} style={{ backgroundColor: bgColor }}>
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
              <span className={styles.time}>
                {time}
                <img src="/clock.svg" alt="time left" className={styles.clockIcon} />
              </span>
            </div>
          </>
        )}
      </div>

      {/* ── Bet block (full variant only) ── */}
      {isFull && (
        <div className={styles.betBlock}>
          <input
            className={styles.betInput}
            type="number"
            placeholder="Your bid ($)"
            min={price}
            aria-label="Enter your bid"
          />
          <Button className={styles.betBtn} type="button" size="md">
            Place Bid
          </Button>
        </div>
      )}
    </article>
  );
}