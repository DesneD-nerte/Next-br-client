import React from "react";
import styles from "./WithGallery.module.css";

import { IDataGallery } from "@models/IDataGallery";
import OnScrollEffects from "./content/OnScrollEffects";
import MainGallery from "@src/modules/MainGallery";
import { MainHeader } from "@src/templates/headers";

type galleryProps = {
    data: IDataGallery[];
    children: JSX.Element[] | JSX.Element;
};

const WithGallery = React.memo(({ data, children }: galleryProps) => {
    return (
        <>
            <OnScrollEffects />
            <MainHeader />
            <MainGallery data={data}></MainGallery>
            <main id="main" className={styles.contentContainer}>
                {children}
            </main>
        </>
    );
});

export default WithGallery;
