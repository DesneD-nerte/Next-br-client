"use client";
import React, { useCallback, useEffect } from "react";
import styles from "./WithGallery.module.css";

import { useAppDispatch } from "@store/hooks";
import { menuActions } from "@modules/Menu/reducer";

import { IDataGallery } from "@models/IDataGallery";
import MainGallery from "@modules/MainGallery";
import { MainHeader } from "@templates/headers";

type galleryProps = {
    data: IDataGallery[];
    children: JSX.Element[] | JSX.Element;
};

const WithGallery = React.memo(({ data, children }: galleryProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(menuActions.mainMenuActions.setExpandMenu(true));
    }, []);

    const onScroll = useCallback((event: any) => {
        const { pageYOffset } = window;
        if (pageYOffset === 0) {
            dispatch(menuActions.mainMenuActions.setExpandMenu(true));
        } else {
            dispatch(menuActions.mainMenuActions.setExpandMenu(false));
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
