import React from "react";
import styles from "../MenuMain.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

import MenuSearch from "../MenuSearch/MenuSearch";
import IconHeart from "@svg/menu/icon-menu-heart.svg";

const RightPanel = () => {
    const router = useRouter();

    const { t } = useTranslation("menu");

    const handleChangeLanguage = (languageValue: string) => {
        const path = router.pathname;
        router.push(path, path, { locale: languageValue });
    };

    return (
        <div className={styles.menuMain__right}>
            <select
                className={styles.menuSelect}
                onChange={(value) => handleChangeLanguage(value.target.value)}
                defaultValue={router.locale}
            >
                <option value="en" className={styles.menuSelect__option}>
                    EN
                </option>
                <option value="ru" className={styles.menuSelect__option}>
                    RU
                </option>
            </select>

            <Link href={"./signIn"}>
                <a className={styles.menuMain__button}>{t("signIn")}</a>
            </Link>

            <Link href={"./favourite"}>
                <a className={`${styles.menuMain__button} ${styles.menuMain__icon}`}>
                    <IconHeart className={styles.iconSearch}></IconHeart>
                </a>
            </Link>

            <Link href={"./bag"}>
                <a className={styles.menuMain__button}>{t("bag")}</a>
            </Link>

            <MenuSearch />
        </div>
    );
};

export default RightPanel;
