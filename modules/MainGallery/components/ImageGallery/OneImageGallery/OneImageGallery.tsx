import React from "react";
import styles from "./OneImageGallery.module.scss";
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

function OneImageGallery(props: imageGalleryProps) {
    const { myIndex, currentIndex, url, urlImage, description, name } = props;

    const disabledClass = myIndex !== currentIndex ? styles.disabledContainer : "";

    const handleClick = () => {
        router.push(url);
    };

    return (
        <div className={`${styles.containerImage} ${disabledClass}`}>
            {/* <Image src={urlImage} alt="image" layout="fill" objectFit="cover"/> */}
            <Image src={urlImage} alt="image" fill style={{objectFit: "cover"}}/>
            <div className={styles.containerImage__content}>
                <a>{description}</a>
                <h1>{name}</h1>
                <button
                    tabIndex={disabledClass ? -1 : 0}
                    className="button button_promoButton"
                    onClick={handleClick}
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default OneImageGallery;
