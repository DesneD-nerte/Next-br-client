import React from "react";
import styles from "../MenuMain.module.scss";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import IconHeart from "@svg/menu/icon-menu-heart.svg";
import MenuSearch from "../MenuSearch/MenuSearch";
import { useTranslation } from "@src/hooks/useTranslation";

const RightPanel = async () => {
    // const router = useRouter();
    // const routerPath = usePathname();

    const { t } = await useTranslation("menu");

    // const handleChangeLanguage = (languageValue: string) => {
    //     router.push(routerPath, routerPath, { locale: languageValue });
    // };

    return (
        <div className={styles.menuMain__right}>
            <select
                className={styles.menuSelect}
                // onChange={(value) => handleChangeLanguage(value.target.value)}
                // defaultValue={router.locale}
            >
                <option value="en" className={styles.menuSelect__option}>
                    EN
                </option>
                <option value="ru" className={styles.menuSelect__option}>
                    RU
                </option>
            </select>

            <Link href={"./signIn"} className={styles.menuMain__button}>
                {t("signIn")}
            </Link>

            <Link
                href={"./favourite"}
                className={`${styles.menuMain__button} ${styles.menuMain__icon}`}
            >
                <IconHeart className={styles.iconSearch}></IconHeart>
            </Link>

            <Link href={"./bag"} className={styles.menuMain__button}>
                {t("bag")}
            </Link>

            <MenuSearch />
        </div>
    );
};

export default RightPanel;
