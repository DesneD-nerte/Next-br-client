import React from "react";
import Footer from "@templates/footers/Footer";

const MainLayout = React.memo(({ children }: React.PropsWithChildren) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
});

export default MainLayout;
