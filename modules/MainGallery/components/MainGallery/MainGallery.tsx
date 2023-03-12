import React, { useState, useEffect } from "react";
import styles from "./MainGallery.module.scss";

import { IDataGallery } from "@models/IDataGallery";

import LeftButtonIcon from "@svg/gallery/icon-left-gallery.svg";
import RightButtonIcon from "@svg/gallery/icon-right-gallery.svg";

import ImageGallery from "../ImageGallery/ImageGallery";
import { useCallback } from "react";

interface mainGalleryProps {
    data: IDataGallery[];
}

function MainGallery({ data }: mainGalleryProps) {
    const [indexData, setIndexData] = useState(0);

    const handleForward = () => {
        if (indexData >= data.length - 1) {
            setIndexData(0);
        } else {
            setIndexData(indexData + 1);
        }
    };

    const handleBack = () => {
        if (indexData <= 0) {
            setIndexData(data.length - 1);
        } else {
            setIndexData(indexData - 1);
        }
    };

    const handleSetImage = useCallback((indexImage: number) => {
        setIndexData(indexImage);
    }, []);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            handleForward();
        }, 5000);

        return () => clearInterval(timerInterval);
    }, [indexData]);

    return (
        <section className={styles.mainComponent}>
            <button className={`${styles.button} ${styles.button__Left}`} onClick={handleBack}>
                <LeftButtonIcon />
            </button>
            <ImageGallery data={data} currentIndex={indexData} handleChangeImage={handleSetImage} />
            <button className={`${styles.button} ${styles.button__Right}`} onClick={handleForward}>
                <RightButtonIcon />
            </button>
        </section>
    );
}

export default MainGallery;
