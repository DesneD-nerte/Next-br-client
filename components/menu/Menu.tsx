import React from "react";
import styles from "./Menu.module.scss";
import { routeProperties } from "../../types/routeProperties";
import Routes from "./components/MenuRoutes/Routes";
import { useAppSelector } from "../../store/hooks";
import MenuMain from "./components/MenuMain/MenuMain";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function Menu({ routes }: menuRoutesProps) {
    const { expanded } = useAppSelector((state) => state.menu);

    return (
        <header
            className={
                expanded ? styles.menuContainer__expanded : styles.menuContainer__hidden
            }
        >
            <MenuMain />
            <nav>
                <Routes routes={routes} />
            </nav>
        </header>
    );
}

export default React.memo(Menu);
