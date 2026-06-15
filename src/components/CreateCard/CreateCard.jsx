"use client";

import styles from "./CreateCard.module.css";
import { useEffect, useRef, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function CreateCard({ price, name, image}) {
    const imgRef = useRef(null);
    const [bgColor, setBgColor] = useState("#263238");

    useEffect(() => {
        const fac = new FastAverageColor();
        const img = imgRef.current;

        const handleLoad = () => {
            const color = fac.getColor(img);

            setBgColor(color.rgb); // або color.rgba
        };

        if (!img) return;

        if (img.complete) {
            handleLoad();
        } else {
            img.addEventListener("load", handleLoad);
        }
    }, []);

    return (
        <div className={styles.card}>
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
                <Input placeholder="Name"/>
                <Input placeholder="Price"/>
                <Button>Submit</Button>
            </div>
        </div>
    );
}