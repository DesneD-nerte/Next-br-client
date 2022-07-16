import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import siteMap from "../../pages/site-map";
import { routeProperties } from "../../types/routeProperties";
import MainGallery from "../MainGallery/MainGallery";

// type routeProperties = {
//     name: string;
//     path: string;
// };

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
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