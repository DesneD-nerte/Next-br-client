import React from "react";
import Menu from "@components/menu/Menu";
import styles from "./MainContent.module.css";

type mainContentProps = {
    children: JSX.Element[] | JSX.Element;
};

const MainContent = React.memo(({ children }: mainContentProps) => {
    return (
        <>
            <Menu expandedControl={false} />
            <main className={`${styles.contentContainer}`}>{children}</main>
        </>
    );
});

export default MainContent;
