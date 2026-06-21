"use client";

import styles from "./CreateCard.module.css";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import Button from "../Button/Button";
import Input from "../Input/Input";

/**
 * CreateCard — preview card shown on the /create page after an image is selected.
 * Extracts dominant colour from the uploaded image and uses it as the background.
 *
 * Props:
 *  - image: object URL of the uploaded file (string)
 */
export default function CreateCard({ image }) {
  const imgRef  = useRef(null);
  const [bgColor, setBgColor] = useState("var(--color-surface-2)");

  /* ── Extract dominant colour from uploaded image ── */
  useEffect(() => {
    const fac = new FastAverageColor();
    const img = imgRef.current;
    if (!img) return;

    const extract = () => {
      try {
        setBgColor(fac.getColor(img).rgb);
      } catch {
        /* ignore – local blob URLs are same-origin so this rarely fails */
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
    <section className={styles.card} aria-label="Artwork preview">
      {/* ── Image preview ── */}
      <div className={styles.imageContainer} style={{ backgroundColor: bgColor }}>
        {image ? (
          <img
            ref={imgRef}
            src={image}
            alt="Artwork preview"
            className={styles.image}
          />
        ) : (
          <span className={styles.imagePlaceholder}>No image</span>
        )}
      </div>

      {/* ── Form fields ── */}
      <div className={styles.fields}>
        <Input id="create-name"  placeholder="Artwork name"  label="Name" />
        <Input id="create-price" placeholder="Price in USD"  label="Price ($)" type="number" min="0" />
        <Button type="submit" size="lg" style={{ width: "100%" }}>
          Submit
        </Button>
      </div>
    </section>
  );
}