"use client";

import { useCallback, useEffect } from "react";
import { menuActions } from "@src/modules/Menu/reducer";
import { useAppDispatch } from "@src/store/hooks";

const OnScrollEffects = () => {
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

    return <></>;
};

export default OnScrollEffects;
