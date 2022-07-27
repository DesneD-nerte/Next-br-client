import React from "react";
import Footer from "../footer/Footer";
import siteMap from "../../pages/site-map";
import { useAppSelector } from "../../store/hooks";
import Menu from "../menu/Menu";

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    return (
        <>
            <Menu routes={siteMap} />
            {children}
            <Footer />
        </>
    );
});

export default Layout;
