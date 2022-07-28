import React, { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { setExpandMenu } from "../../store/reducers/MenuSlice";
import styles from "./WithoutGallery.module.css";

const WithoutGallery = React.memo(({ children }: React.PropsWithChildren) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setExpandMenu(false));
    }, []);

    return (
        <>
            <div className={styles.menuDoll}></div>

            <div className={styles.contentContainer}>{children}</div>
        </>
    );
});

export default WithoutGallery;
