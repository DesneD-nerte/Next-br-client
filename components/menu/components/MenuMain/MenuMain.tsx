import Link from "next/link";
import React from "react";
import styles from "./MenuMain.module.scss";
import Image from "next/image";
import MenuSearch from "./MenuSearch/MenuSearch";
import IconHeart from "../../svg/icon-menu-heart.svg";
import { useTranslation } from "next-i18next";

const MenuMain = () => {
    const { t } = useTranslation("menu");

    return (
        <div className={styles.menuMain}>
            <div className={styles.menuMain__left}>
                <button className={styles.menuMain__button}>Novosibirsk</button>
            </div>

            <Link href="/">
                <a className={styles.menuMain__logo}>
                    <Image
                        src="/brandImage.png"
                        width={170}
                        height={30}
                        alt="brand image"
                    ></Image>
                </a>
            </Link>

            <div className={styles.menuMain__right}>
                <Link href={"./signIn"}>
                    <a className={styles.menuMain__button}>{t("signIn")}</a>
                </Link>

                <Link href={"./favourite"}>
                    <a
                        className={`${styles.menuMain__button} ${styles.menuMain__icon}`}
                    >
                        <IconHeart className={styles.iconSearch}></IconHeart>
                    </a>
                </Link>

                <Link href={"./bag"}>
                    <a className={styles.menuMain__button}>{t("bag")}</a>
                </Link>

                <MenuSearch />
            </div>
        </div>
    );
};

export default React.memo(MenuMain);
