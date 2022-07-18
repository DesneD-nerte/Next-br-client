import React from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

type imageGalleryProps = {
    url: string;
    name?: string;
    description?: string;

    myIndex: number;
    count: number;
    currentIndex: number;
};

function ImageGallery(props: imageGalleryProps) {
    const disabledClass =
        props.myIndex !== props.currentIndex ? styles.disabledContainer : "";

    return (
        <div className={`${styles.containerImage} ${disabledClass}`}>
            <Image src={props.url} alt="image" layout="fill" objectFit="cover" />
            <div className={styles.content}>
                <h1 className={styles.whiteColor}>{props.name}</h1>
                <a className={styles.whiteColor}>{props.description}</a>
            </div>
        </div>
    );
}

export default ImageGallery;
