import React, { useCallback, useEffect } from "react";
import Footer from "../footer/Footer";
import siteMap from "../../pages/site-map";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Menu from "../menu/Menu";
import { setExpand } from "../../store/reducers/MenuSlice";

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    const dispatch = useAppDispatch();

    const onScroll = useCallback((event: any) => {
        const { pageYOffset } = window;
        if (pageYOffset === 0) {
            dispatch(setExpand(true));
        } else {
            dispatch(setExpand(false));
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
            <Menu routes={siteMap} />
            {children}
            <Footer />
        </>
    );
});

export default Layout;
