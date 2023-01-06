import { IDataGallery } from "@root/models/IDataGallery";
import React from "react";
import styles from "./ImageControlPanel.module.scss";

interface ImageControlPanelProps {
    data: IDataGallery[];
    // handleSetImage: () => void;
}

const ImageControlPanel = ({ data }: ImageControlPanelProps) => {
    return (
        <div className={styles.navigationImageWrapper}>
            <ul className={styles.navigationImageContainer}>
                {data.map((oneData, index) => {
                    return (
                        <li className={styles.carouselDots} key={index}>
                            <div className={styles.carouselDots__mainCircle}></div>
                            <div className={styles.carouselDots__outerCircle}></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ImageControlPanel;
