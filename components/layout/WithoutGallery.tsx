import React, { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setExpandMenu } from "../../store/reducers/MenuSlice";
import styles from "./WithoutGallery.module.css";

type withoutGalleryProps = {
    isMargin: boolean;
    children: JSX.Element;
};

const WithoutGallery = React.memo(({ isMargin, children }: withoutGalleryProps) => {
    const marginClass = isMargin === true ? styles.contentContainer_margin : "";

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setExpandMenu(false));
    }, []);

    return (
        <>
            <div className={styles.menuDoll}></div>

            <div className={`${styles.contentContainer} ${marginClass}`}>{children}</div>
        </>
    );
});

export default WithoutGallery;
