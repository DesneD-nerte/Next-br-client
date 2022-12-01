import React from "react";
import Footer from "@components/footer/Footer";
import MenuSkip from "@components/menu/components/MenuSkip/MenuSkip";

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
