import React from "react";
import {MainHeader} from "@templates/headers";
import styles from "./MainContent.module.css";

type mainContentProps = {
    children: JSX.Element[] | JSX.Element;
};

const MainContent = React.memo(({ children }: mainContentProps) => {
    return (
        <>
            <MainHeader expandedControl={false} />
            <main className={`${styles.contentContainer}`}>{children}</main>
        </>
    );
});

export default MainContent;
