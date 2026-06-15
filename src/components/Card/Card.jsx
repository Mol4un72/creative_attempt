"use client";

import styles from "./Card.module.css";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Card({ art, variant = "default" }) {
    const { name, price, time, image } = art;
    const imgRef = useRef(null);
    const [bgColor, setBgColor] = useState("#263238");
    const hasMeta = price && time;
    const isFull = variant === "full";

    useEffect(() => {
        const fac = new FastAverageColor();
        const img = imgRef.current;

        if (!img) return;

        const handleLoad = () => {
            const color = fac.getColor(img);
            setBgColor(color.rgb);
        };

        img.addEventListener("load", handleLoad);

        if (img.complete) {
            handleLoad();
        }

        return () => {
            img.removeEventListener("load", handleLoad);
            fac.destroy?.();
        };
    }, [image]);

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div
                className={styles.imageContainer}
                style={{ backgroundColor: bgColor }}
            >
                <img
                    ref={imgRef}
                    src={image}
                    alt="Artwork"
                    className={styles.image}
                />
            </div>

            <div className={styles.info}>
                <p className={`${styles.name} ${!hasMeta ? styles.centerName : ""}`}>
                    {name}
                </p>

                {hasMeta && <hr className={styles.hr} />}

                {hasMeta && (
                <div className={styles.details}>
                    {price && <p>{price}$</p>}
                    {time && <p>
                                {time}
                                <span className={styles.time}>
                                    <img src="/clock.svg"></img>
                                </span>
                            </p>
                    }
                </div>
                )}
            </div>

            {isFull && (
                <div className={styles.fullBlock}>
                    <Input placeholder="Price"/>
                    <Button>Bet</Button>
                </div>
            )}
        </div>
    );
}