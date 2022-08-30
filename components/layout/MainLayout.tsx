import React from "react";
import Footer from "../footer/Footer";

const Layout = React.memo(({ children }: React.PropsWithChildren) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
});

export default Layout;
