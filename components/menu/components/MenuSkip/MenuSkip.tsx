import React from "react";
import styles from "./MenuSkip.module.scss";
import Link from "next/link";

const MenuSkip = () => {
    return (
        <Link href={"#main"}>
            <a className={styles.skipMenu}>Skip content</a>
        </Link>
    );
};

export default MenuSkip;
