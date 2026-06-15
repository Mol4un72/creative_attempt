"use client";

import Header from "../../components/Header/Header";
import { useState, useRef } from "react";
import styles from "./page.module.css";
import CreateCard from "../../components/CreateCard/CreateCard";

export default function CreatePage({name, price}) {
    const [image, setImage] = useState(null);
    const handleFile = (file) => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        setImage(url);
    };
    const inputRef = useRef(null);
    const openFile = () => {
        inputRef.current.click();
    };

    return (
        <div className={styles.page}>
        <Header />
        
        {!image ? (
            <div
                className={styles.dropzone}
                onClick={openFile}
            >
                <h2>Add image</h2>
                <div className={styles.dropzoneCircle}>+</div>
        
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) => handleFile(e.target.files[0])}
                />
            </div>
        ) : (
            <CreateCard image={image}/>
            )}
            </div>
        );
}