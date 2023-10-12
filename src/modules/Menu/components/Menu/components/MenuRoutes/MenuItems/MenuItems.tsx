import React, { useState } from "react";
import styles from "./MenuItems.module.scss";
import Link from "next/link";
import { useTranslation } from "@hooks/useTranslation";
import { routeProperties } from "@src/types/routeProperties";
import SubMenu from "./SubMenu/SubMenu";
import TriangleIcon from "@svg/menu/icon-menu-column.svg";
import { useDebounce } from "@src/hooks/useDebounce";

type menuItemsProps = {
    oneMenuRoute: routeProperties;
};

async function MenuItems({ oneMenuRoute }: menuItemsProps) {
    const [dropDown, setDropDown] = useState(false);
    const delayedDropDown = useDebounce(dropDown, 200);

    const handleFocus = (dropState: boolean) => {
        setDropDown(dropState);
    };

    const { t } = await useTranslation("ru");

    return (
        <li
            className={styles.onePath}
            onMouseEnter={() => handleFocus(true)}
            onMouseLeave={() => handleFocus(false)}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
        >
            <Link
                href={oneMenuRoute.path}
                className={`${styles.onePath__navLink} ${
                    dropDown && styles.onePath__navLink_active
                }`}
            >
                {t(`${oneMenuRoute.interName}`)}
                <div className={styles.onePath__navLinkIcon}>
                    <TriangleIcon />
                </div>
            </Link>

            <SubMenu childRoutes={oneMenuRoute.children} dropDown={delayedDropDown}></SubMenu>
        </li>
    );
}

export default MenuItems;
