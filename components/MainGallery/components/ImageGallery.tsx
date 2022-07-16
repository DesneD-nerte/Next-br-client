import React from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

function ImageGallery() {
    return (
        <div className={styles.containerImage}>
            <Image src={"/Hero.avif"} layout="fill" objectFit="cover" />
            <div className={styles.content}>
                <h1 className={styles.whiteColor}>NEW COLLECTION</h1>
                <a className={styles.whiteColor}>SHOP THE COLLECTION</a>
            </div>
        </div>
    );
}

export default ImageGallery;
