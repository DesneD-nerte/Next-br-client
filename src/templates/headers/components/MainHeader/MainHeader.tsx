import React from "react";
import styles from "./MainHeader.module.scss";
import Menu from "@modules/Menu/components/Menu/Menu";

const MainHeader = () => {
    return (
        <header className={styles.headerMenu}>
            <Menu />
        </header>
    );
};

export default React.memo(MainHeader);
