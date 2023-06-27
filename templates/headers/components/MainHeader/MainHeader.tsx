import React from "react";
import { useDispatch } from "react-redux";
import styles from "./MainHeader.module.scss";

import { useAppSelector } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";

import routes from "core/site-map.js";
import { MenuSkip, MenuMain, Routes } from "@modules/Menu";

type menuProps = {
    expandedControl?: boolean;
};

const MainHeader = ({ expandedControl }: menuProps) => {
    const { expanded } = useAppSelector((state) => state.menu);
    const dispatch = useDispatch();

    if (expandedControl != undefined && expandedControl != expanded) {
        dispatch(setExpandMenu(expandedControl));
    }

    return (
        <header className={styles.headerMenu}>
            <MenuSkip/>
            <div
                className={expanded ? styles.menuContainer__expanded : styles.menuContainer__hidden}
            >
                <MenuMain />
                <nav>
                    <Routes routes={routes} />
                </nav>
            </div>
        </header>
    );
};

export default React.memo(MainHeader);
