import React from "react";
import styles from "./ImageGallery.module.css";
import Image from "next/image";
import router from "next/router";

type imageGalleryProps = {
    urlImage: string;
    url: string;
    name?: string;
    description?: string;

    myIndex: number;
    count: number;
    currentIndex: number;
};

function ImageGallery(props: imageGalleryProps) {
    const disabledClass = props.myIndex !== props.currentIndex ? styles.disabledContainer : "";

    const handleClick = () => {
        router.push(props.url);
    };

    return (
        <div className={`${styles.containerImage} ${disabledClass}`}>
            <Image src={props.urlImage} alt="image" layout="fill" objectFit="cover" />
            <div className={styles.content}>
                <a className={styles.unselectableDescription}>{props.description}</a>
                <h1 className={styles.unselectableDescription}>{props.name}</h1>
                <button className={styles.buttonImage} onClick={handleClick}>
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default ImageGallery;
