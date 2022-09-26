import React from "react";
import styles from "./Menu.module.scss";
import Routes from "./components/MenuRoutes/Routes";
import { useAppSelector } from "../../store/hooks";
import MenuMain from "./components/MenuMain/MenuMain";
import routes from "../../pages/site-map";
import { useDispatch } from "react-redux";
import { setExpandMenu } from "../../store/reducers/MenuSlice";

type menuProps = {
    expandedControl?: boolean;
};

function Menu({ expandedControl }: menuProps) {
    const { expanded } = useAppSelector((state) => state.menu);
    const dispatch = useDispatch();

    if (expandedControl != undefined && expandedControl != expanded) {
        dispatch(setExpandMenu(expandedControl));
    }

    return (
        <header className={styles.headerMenu}>
            <div
                className={
                    expanded
                        ? styles.menuContainer__expanded
                        : styles.menuContainer__hidden
                }
            >
                <MenuMain />
                <nav>
                    <Routes routes={routes} />
                </nav>
            </div>
        </header>
    );
}

export default React.memo(Menu);
