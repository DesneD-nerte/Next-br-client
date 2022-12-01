import React from "react";
import styles from "../MenuMain.module.scss";
import Link from "next/link";
import Image from "next/image";

const CenterPanel = () => {
    return (
        <Link href="/">
            <a className={styles.menuMain__logo}>
                <Image src="/brandImage.png" width={170} height={30} alt="brand image"></Image>
            </a>
        </Link>
    );
};

export default CenterPanel;
