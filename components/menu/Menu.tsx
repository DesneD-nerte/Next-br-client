import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Menu.module.scss";

import { useAppSelector } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";

import routes from "@root/pages/site-map";
import Routes from "./components/menu/MenuRoutes/Routes";
import MenuMain from "./components/menu/MenuMain/MenuMain";

type menuProps = {
    expandedControl?: boolean;
};

const Menu = ({ expandedControl }: menuProps) => {
    const { expanded } = useAppSelector((state) => state.menu);
    const dispatch = useDispatch();

    if (expandedControl != undefined && expandedControl != expanded) {
        dispatch(setExpandMenu(expandedControl));
    }

    return (
        <header className={styles.headerMenu}>
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

export default React.memo(Menu);
