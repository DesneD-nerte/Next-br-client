import React from "react";
import Footer from "../footer/Footer";
import MenuSkip from "../menu/components/MenuSkip/MenuSkip";

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    return (
        <>
            <MenuSkip />
            {children}
            <Footer />
        </>
    );
});

export default Layout;
