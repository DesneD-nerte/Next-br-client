import React, { useState } from "react";
import { IDataGallery } from "../../models/IDataGallery";
import ImageGallery from "./components/ImageGallery";
import styles from "./MainGallery.module.css";

type galleryProps = {
    data: IDataGallery[];
};

function MainGallery({ data }: galleryProps) {
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

    return (
        <div className={styles.mainComponent}>
            <button
                className={`${styles.button} ${styles.buttonLeft}`}
                onClick={handleBack}
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
            {data.map((oneData, index) => {
                return (
                    <ImageGallery
                        url={oneData.url}
                        name={oneData.name}
                        description={oneData.description}
                        myIndex={index}
                        currentIndex={indexData}
                        count={data.length}
                        key={index}
                    />
                );
            })}
            <button
                className={`${styles.button} ${styles.buttonRight}`}
                onClick={handleForward}
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
