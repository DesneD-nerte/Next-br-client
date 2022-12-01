import React, { useState } from "react";
import styles from "./MainGallery.module.css";

import { IDataGallery } from "@models/IDataGallery";
import ImageGallery from "./components/ImageGallery";
import LeftButtonIcon from "@svg/gallery/icon-left-gallery.svg";
import RightButtonIcon from "@svg/gallery/icon-right-gallery.svg";

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
        <section className={styles.mainComponent}>
            <button className={styles.button} onClick={handleBack}>
                <LeftButtonIcon />
            </button>
            {data.map((oneData, index) => {
                return (
                    <ImageGallery
                        urlImage={oneData.urlImage}
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
            <button className={styles.button} onClick={handleForward}>
                <div>
                    <RightButtonIcon />
                </div>
            </button>
        </section>
    );
}

export default MainGallery;
