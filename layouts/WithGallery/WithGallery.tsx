import React, { useCallback, useEffect } from "react";
import styles from "./WithGallery.module.css";

import { useAppDispatch } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";

import { IDataGallery } from "@models/IDataGallery";
import MainGallery from "@modules/MainGallery";
import {MainHeader} from "@templates/headers";

type galleryProps = {
    data: IDataGallery[];
    children: JSX.Element[] | JSX.Element;
};

const WithGallery = React.memo(({ data, children }: galleryProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setExpandMenu(true));
    }, []);

    const onScroll = useCallback((event: any) => {
        const { pageYOffset } = window;
        if (pageYOffset === 0) {
            dispatch(setExpandMenu(true));
        } else {
            dispatch(setExpandMenu(false));
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <>
            <MainHeader />
            <MainGallery data={data}></MainGallery>
            <main id="main" className={styles.contentContainer}>
                {children}
            </main>
        </>
    );
});

export default WithGallery;
