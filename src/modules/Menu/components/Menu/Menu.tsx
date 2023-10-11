"use client";

import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Menu.module.scss";

import { useAppSelector } from "@store/hooks";
import { menuActions } from "../../reducer";

import routes from "@src/core/site-map.js";
import { MenuSkip } from "./components/MenuSkip/MenuSkip";
import { MenuMain } from "./components/MenuMain/MenuMain";
import { MenuRoutes } from "./components/MenuRoutes/MenuRoutes";

type menuProps = {
    expandedControl?: boolean;
};

const Menu = ({ expandedControl }: menuProps) => {
    const { expanded } = useAppSelector((state) => state.menu.mainMenu);
    const dispatch = useDispatch();

    if (expandedControl != undefined && expandedControl != expanded) {
        dispatch(menuActions.mainMenuActions.setExpandMenu(expandedControl));
    }

    return (
        <div className={styles.menuContainer}>
            <MenuSkip />
            <div
                className={expanded ? styles.menuContainer__expanded : styles.menuContainer__hidden}
            >
                <MenuMain />
                <nav>
                    <MenuRoutes routes={routes} />
                </nav>
            </div>
        </div>
    );
};

export default React.memo(Menu);
