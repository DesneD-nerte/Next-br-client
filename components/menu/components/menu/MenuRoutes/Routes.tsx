import React from "react";
import styles from "./Routes.module.scss";

import MenuItems from "./MenuItems/MenuItems";
import { routeProperties } from "@root/types/routeProperties";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <div className={styles.menuLinks}>
            <ul>
                {routes.map((oneMenuRoute: routeProperties) => {
                    return (
                        <MenuItems oneMenuRoute={oneMenuRoute} key={oneMenuRoute.path}></MenuItems>
                    );
                })}
            </ul>
        </div>
    );
};

export default React.memo(Routes);
