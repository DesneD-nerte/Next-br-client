import { IDataGallery } from "@src/models/IDataGallery";
import React from "react";
import styles from "./ImageControlPanel.module.scss";
import OneImageControlPanel from "./OneImageControlPanel/OneImageControlPanel";

interface ImageControlPanelProps {
    data: IDataGallery[];
    currentIndex: number;
    handleChangeImage: (indexImage: number) => void;
}

const ImageControlPanel = ({ data, currentIndex, handleChangeImage }: ImageControlPanelProps) => {
    return (
        <div className={styles.navigationImageWrapper}>
            <ul className={styles.navigationImageContainer}>
                {data.map((oneData, index) => {
                    return (
                        <OneImageControlPanel
                            currentIndex={currentIndex}
                            myIndex={index}
                            handleChangeImage={handleChangeImage}
                            key={index}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ImageControlPanel;
