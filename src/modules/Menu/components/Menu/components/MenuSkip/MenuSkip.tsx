import React from "react";
import styles from "./MenuSkip.module.scss";
import Link from "next/link";

const MenuSkip = () => {
    return (
        <Link href={"#main"} className={styles.skipMenu}>
            Skip content
        </Link>
    );
};

export { MenuSkip };
