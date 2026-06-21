"use client";

import Header from "../../components/Header/Header";
import { useState, useRef } from "react";
import styles from "./page.module.css";
import CreateCard from "../../components/CreateCard/CreateCard";

export default function CreatePage() {
  const [image,    setImage]    = useState(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  /* ── Handle file selection (click or drag) ── */
  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImage(URL.createObjectURL(file));
  };

  /* Drag-and-drop handlers */
  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={`${styles.main} ${image ? styles.compact : ""}`}>
        <h1 className={`${styles.pageTitle} ${image ? styles.hidden : ""}`}>
          Create Artwork
        </h1>
        <p className={`${styles.pageSub} ${image ? styles.hidden : ""}`}>
          Upload an image, add a name and price to list it.
        </p>
        {!image ? (
          /* ── Dropzone ── */
          <div
            className={`${styles.dropzone} ${dragging ? styles.dropzoneDragging : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Click or drop an image to upload"
            onClick={() => inputRef.current?.click()}
            onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className={styles.dropzoneIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <h2 className={styles.dropzoneTitle}>Drop your image here</h2>
            <p className={styles.dropzoneSub}>or <span className={styles.dropzoneLink}>click to browse</span></p>
            <p className={styles.dropzoneHint}>PNG, JPG, GIF, WEBP up to 10 MB</p>

            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              aria-hidden="true"
              tabIndex={-1}
              style={{ display: "none" }}
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </div>
        ) : (
          /* ── Preview card ── */
          <>
            <CreateCard image={image} />
            <button
              className={styles.changeBtn}
              onClick={() => setImage(null)}
            >
              ← Change image
            </button>
          </>
        )}
      </main>

    </div>
  );
}