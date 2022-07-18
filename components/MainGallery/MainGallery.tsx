import Image from "next/image";
import { relative } from "path";
import React from "react";
import ImageGallery from "./components/ImageGallery";
import styles from "./MainGallery.module.css";

function MainGallery() {
    return (
        <div className={styles.mainComponent}>
            <button
                className={`${styles.button} ${styles.buttonLeft}`}
                onClick={(e) => console.log(123)}
            >
                <svg
                    stroke="white"
                    width="50px"
                    height="75px"
                    strokeWidth="1.5"
                    fill="none"
                >
                    <path d="M5 40 L30 10" />
                    <path d="M5 40 L30 70" />
                </svg>
            </button>
            <ImageGallery></ImageGallery>
            <button
                className={`${styles.button} ${styles.buttonRight}`}
                onClick={(e) => console.log(123)}
            >
                <div>
                    <svg
                        stroke="white"
                        width="50px"
                        height="75px"
                        strokeWidth="1.5"
                        fill="none"
                    >
                        <path d="M45 40 L20 10" />
                        <path d="M45 40 L20 70" />
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default MainGallery;
