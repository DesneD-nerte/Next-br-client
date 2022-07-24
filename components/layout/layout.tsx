import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import siteMap from "../../pages/site-map";
import MainGallery from "../MainGallery/MainGallery";
import { useAppSelector } from "../../store/hooks";
import Menu from "../menu/Menu";

// type routeProperties = {
//     name: string;
//     path: string;
// };

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    const { expanded } = useAppSelector((state) => state.menu);

    return (
        <>
            <Menu routes={siteMap} />
            <MainGallery></MainGallery>
            {children}
            <Footer />
        </>
    );
});

export default Layout;
