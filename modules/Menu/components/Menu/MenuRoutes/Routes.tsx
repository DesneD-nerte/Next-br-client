import React from "react";
import styles from "./Routes.module.scss";

import MenuItems from "./MenuItems/MenuItems";
import { routeProperties } from "@root/types/routeProperties";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <ul className={styles.menuLinks}>
            {routes.map((oneMenuRoute: routeProperties) => {
                return (
                    <MenuItems oneMenuRoute={oneMenuRoute} key={oneMenuRoute.path}></MenuItems>
                );
            })}
        </ul>
    );
};

export default React.memo(Routes);
