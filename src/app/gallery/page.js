"use client";

import { useState, useMemo, useCallback } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Link from "next/link";

/* ── Placeholder arts data (replace with API fetch when ready) ── */
const arts = [
  { id: 1,  name: "Gigachad",  price: 1000, time: 1000, image: "/img.png" },
  { id: 2,  name: "Pepe",      price: 500,  time: 800,  image: "/img.png" },
  { id: 3,  name: "Doge",      price: 750,  time: 600,  image: "/img.png" },
  { id: 4,  name: "Wojak",     price: 200,  time: 1200, image: "/img.png" },
  { id: 5,  name: "Nyan Cat",  price: 300,  time: 400,  image: "/img.png" },
  { id: 6,  name: "Shiba",     price: 900,  time: 900,  image: "/img.png" },
  { id: 7,  name: "Trollface", price: 150,  time: 300,  image: "/img.png" },
  { id: 8,  name: "Rickroll",  price: 420,  time: 500,  image: "/img.png" },
  { id: 9,  name: "Drakeposting", price: 600, time: 700, image: "/img.png" },
  { id: 10, name: "Grumpy Cat", price: 850, time: 1100, image: "/img.png" },
  { id: 11, name: "Distracted", price: 350, time: 600,  image: "/img.png" },
  { id: 12, name: "Success Kid", price: 450, time: 800, image: "/img.png" },
];

/** Sort options */
const SORT_OPTIONS = [
  { value: "default",    label: "Default" },
  { value: "price-asc",  label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
  { value: "name-asc",   label: "A → Z" },
];

/**
 * Debounce hook — delays updating a value until the user stops typing.
 */
import { useEffect, useRef } from "react";

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function GalleryPage() {
  const [rawQuery, setRawQuery]   = useState("");
  const [sortBy,   setSortBy]     = useState("default");

  /* Debounce the search so we don't filter on every keystroke */
  const query = useDebounce(rawQuery, 280);

  /* Filter + sort — memoised so it only recalculates when inputs change */
  const filtered = useMemo(() => {
    let result = arts.filter(
      (a) =>
        a.image &&
        a.name &&
        a.name.toLowerCase().includes(query.toLowerCase())
    );

    switch (sortBy) {
      case "price-asc":  result = [...result].sort((a, b) => a.price - b.price); break;
      case "price-desc": result = [...result].sort((a, b) => b.price - a.price); break;
      case "name-asc":   result = [...result].sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }

    return result;
  }, [query, sortBy]);

  const handleQuery = useCallback((e) => setRawQuery(e.target.value), []);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        {/* ── Page heading ── */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Gallery</h1>
          <p className={styles.pageSub}>Browse and collect unique artworks</p>
        </div>

        {/* ── Search + Sort toolbar ── */}
        <div className={styles.toolbar}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              id="gallery-search"
              className={styles.searchInput}
              type="search"
              placeholder="Search artworks…"
              value={rawQuery}
              onChange={handleQuery}
              aria-label="Search artworks"
            />
            {rawQuery && (
              <button
                className={styles.searchClear}
                onClick={() => setRawQuery("")}
                aria-label="Clear search"
              >✕</button>
            )}
          </div>

          <select
            id="gallery-sort"
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort artworks"
          >
            {SORT_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>

        {/* ── Results count ── */}
        <p className={styles.resultCount} aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "artwork" : "artworks"}
          {query && ` for "${query}"`}
        </p>

        {/* ── Card grid ── */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((art) => (
              <Link key={art.id} href={`/gallery/${art.id}`} className={styles.cardLink}>
                <Card variant="default" art={art} />
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🔍</span>
            <p>No artworks match <strong>&quot;{rawQuery}&quot;</strong></p>
            <button className={styles.emptyReset} onClick={() => setRawQuery("")}>
              Clear search
            </button>
          </div>
        )}
      </main>

    </div>
  );
}