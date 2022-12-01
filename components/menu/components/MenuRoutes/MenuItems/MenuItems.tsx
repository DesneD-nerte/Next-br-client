import React, { useRef, useState } from "react";
import styles from "./MenuItems.module.scss";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { routeProperties } from "@root/types/routeProperties";
import SubMenu from "../SubMenu/SubMenu";
import TriangleIcon from "@svg/menu/icon-menu-column.svg";

type menuItemsProps = {
    oneMenuRoute: routeProperties;
};

function MenuItems({ oneMenuRoute }: menuItemsProps) {
    const [dropDown, setDropDown] = useState(false);
    const timerStack = useRef<Array<NodeJS.Timeout>>([]);

    const handleFocus = (dropState: boolean) => {
        if (!dropState) {
            for (const oneTimer of timerStack.current) {
                clearTimeout(oneTimer);
            }
        }

        const timer = setTimeout(() => {
            setDropDown(dropState);
        }, 200);
        timerStack.current.push(timer);
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

            <SubMenu childRoutes={oneMenuRoute.children} dropDown={dropDown}></SubMenu>
        </li>
    );
}

export default MenuItems;
