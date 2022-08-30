import React from "react";
import styles from "./Menu.module.css";
import { routeProperties } from "../../types/routeProperties";
import Routes from "./components/MenuRoutes/Routes";
import { useAppSelector } from "../../store/hooks";
import MenuMain from "./components/MenuMain/MenuMain";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function MenuExpanded({ routes }: menuRoutesProps) {
    const { expanded } = useAppSelector((state) => state.menu);

    return (
        <header
            className={
                expanded ? styles.menuContainer_Expanded : styles.menuContainer_Hidden
            }
        >
            <MenuMain />
            <nav>
                <Routes routes={routes} />
            </nav>
        </header>
    );
}

export default React.memo(MenuExpanded);
