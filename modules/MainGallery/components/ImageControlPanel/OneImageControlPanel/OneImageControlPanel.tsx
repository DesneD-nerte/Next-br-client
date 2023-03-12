import React from "react";
import styles from "./OneImageControlPanel.module.scss";

interface OneImageControlPanelProps {
    myIndex: number;
    currentIndex: number;
    handleChangeImage: (indexImage: number) => void;
}

const OneImageControlPanel = ({
    myIndex,
    currentIndex,
    handleChangeImage,
}: OneImageControlPanelProps) => {
    const activeMainCircle = myIndex == currentIndex ? styles.carouselDots__mainCircle_active : "";
    const activeOuterCircle =
        myIndex == currentIndex ? styles.carouselDots__outerCircle_active : "";

    return (
        <li className={styles.carouselDots} onClick={() => handleChangeImage(myIndex)}>
            <div className={`${styles.carouselDots__mainCircle} ${activeMainCircle}`}></div>
            <div className={`${styles.carouselDots__outerCircle} ${activeOuterCircle}`}></div>
        </li>
    );
};

export default OneImageControlPanel;
