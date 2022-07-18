import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import MenuExpanded from "../menu/MenuExpanded";
import siteMap from "../../pages/site-map";
import MainGallery from "../MainGallery/MainGallery";
import { useAppSelector } from "../../store/hooks";
import MenuHidden from "../menu/MenuHidden";

// type routeProperties = {
//     name: string;
//     path: string;
// };

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    const { expanded } = useAppSelector((state) => state.menu);

    return (
        <>
            {expanded ? (
                <MenuExpanded routes={siteMap} />
            ) : (
                <MenuHidden routes={siteMap}></MenuHidden>
            )}
            <MainGallery></MainGallery>
            {children}
            <Footer />
        </>
    );
});

export default Layout;
