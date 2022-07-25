import Image from "next/image";
import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery";
import styles from "./MainGallery.module.css";

const data = [
    {
        url: "/Hero.avif",
        name: "Collection",
        description: "Some Descr",
    },
    {
        url: "/Trap.png",
        name: "New name",
        description: "Go to the shop",
    },
];

function MainGallery() {
    const [currentData, setCurrentData] = useState(data[0]);
    const [indexData, setIndexData] = useState(0);

    const handleForward = () => {
        // setCurrentData(data[1]);
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
        // setCurrentData(data[0]);
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
