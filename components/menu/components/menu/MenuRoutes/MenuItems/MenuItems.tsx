import React, { useState } from "react";
import styles from "./MenuItems.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { routeProperties } from "@root/types/routeProperties";
import SubMenu from "./SubMenu/SubMenu";
import TriangleIcon from "@svg/menu/icon-menu-column.svg";
import { useDebounce } from "@root/hooks/useDebounce";

type menuItemsProps = {
    oneMenuRoute: routeProperties;
};

function MenuItems({ oneMenuRoute }: menuItemsProps) {
    const [dropDown, setDropDown] = useState(false);
    const delayedDropDown = useDebounce(dropDown, 200);

    const handleFocus = (dropState: boolean) => {
        setDropDown(dropState);
    };

    const { t } = useTranslation("menu");

    return (
        <li
            className={styles.onePath}
            key={oneMenuRoute.path}
            onMouseEnter={() => handleFocus(true)}
            onMouseLeave={() => handleFocus(false)}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
        >
            <Link href={oneMenuRoute.path}>
                <a
                    className={`${styles.onePath__navLink} ${
                        dropDown && styles.onePath__navLink_active
                    }`}
                >
                    {t(`${oneMenuRoute.interName}`)}
                    <div className={styles.onePath__navLinkIcon}>
                        <TriangleIcon />
                    </div>
                </a>
            </Link>

            <SubMenu childRoutes={oneMenuRoute.children} dropDown={delayedDropDown}></SubMenu>
        </li>
    );
}

export default MenuItems;
