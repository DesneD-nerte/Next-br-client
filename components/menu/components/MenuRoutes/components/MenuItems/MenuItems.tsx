import Link from "next/link";
import React, { useState } from "react";
import { routeProperties } from "../../../../../../types/routeProperties";
import styles from "./MenuItems.module.scss";
import SubMenu from "./components/SubMenu/SubMenu";

type menuItemsProps = {
    oneMenuRoute: routeProperties;
};

function MenuItems({ oneMenuRoute }: menuItemsProps) {
    const [dropDown, setDropDown] = useState(false);

    return (
        <li
            className={styles.onePath}
            key={oneMenuRoute.path}
            onMouseEnter={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
        >
            <Link href={oneMenuRoute.path}>
                <a className={styles.onePath__navLink}>{oneMenuRoute.name}</a>
            </Link>

            <SubMenu childRoutes={oneMenuRoute.children} dropDown={dropDown}></SubMenu>
        </li>
    );
}

export default MenuItems;
