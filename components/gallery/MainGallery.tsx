import React, { useState } from "react";
import styles from "./MainGallery.module.css";

import { IDataGallery } from "@models/IDataGallery";

import LeftButtonIcon from "@svg/gallery/icon-left-gallery.svg";
import RightButtonIcon from "@svg/gallery/icon-right-gallery.svg";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageControlPanel from "./components/ImageControlPanel/ImageControlPanel";

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

    const handleSetImage = () => {};

    return (
        <section className={styles.mainComponent}>
            <button className={styles.button} onClick={handleBack}>
                <LeftButtonIcon />
            </button>
            <ImageGallery data={data} currentIndex={indexData} />
            <ImageControlPanel data={data} />
            <button className={styles.button} onClick={handleForward}>
                <div>
                    <RightButtonIcon />
                </div>
            </button>
        </section>
    );
}

export default MainGallery;
