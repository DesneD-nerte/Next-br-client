import React from "react";
import Menu from "../menu/Menu";
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

    // return (
    //     <>
    //         <Menu expandedControl={false} />
    //         <main className={`container-fluid ${styles.contentContainer}`}>{children}</main>
    //     </>
    // );

    // const MainContent = React.memo(({ isMargin, children }: mainContentProps) => {
    // const marginClass = isMargin === true ? styles.contentContainer_margin : "";
    // return (
    //     <>
    //         <Menu expandedControl={false} />
    //         <main className={`container-fluid ${styles.contentContainer} ${marginClass}`}>
    //             {children}
    //         </main>
    //     </>
    // );
});

export default MainContent;
