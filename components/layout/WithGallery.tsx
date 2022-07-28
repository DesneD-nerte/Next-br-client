import React, { useCallback, useEffect } from "react";
import { IDataGallery } from "../../models/IDataGallery";
import { useAppDispatch } from "../../store/hooks";
import { setExpandMenu } from "../../store/reducers/MenuSlice";
import MainGallery from "../MainGallery/MainGallery";
import styles from "./WithGallery.module.css";

type galleryProps = {
    data: IDataGallery[];
    children: JSX.Element;
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
            <MainGallery data={data}></MainGallery>
            <div className={styles.contentContainer}>{children}</div>
        </>
    );
});

export default WithGallery;
