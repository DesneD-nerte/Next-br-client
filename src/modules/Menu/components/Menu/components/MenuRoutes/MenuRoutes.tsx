import React from "react";
import styles from "./Routes.module.scss";

import MenuItems from "./MenuItems/MenuItems";
import { routeProperties } from "@src/types/routeProperties";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const MenuRoutes = React.memo(({ routes }: menuRoutesProps) => {
    return (
        <ul className={styles.menuLinks}>
            {routes.map((oneMenuRoute: routeProperties) => {
                return <MenuItems oneMenuRoute={oneMenuRoute} key={oneMenuRoute.path}></MenuItems>;
            })}
        </ul>
    );
});

export { MenuRoutes };
