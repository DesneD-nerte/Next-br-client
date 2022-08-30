import { routeProperties } from "../../../../types/routeProperties";
import styles from "./Routes.module.css";
import MenuItems from "./components/MenuItems/MenuItems";
import React from "react";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const Routes = ({ routes }: menuRoutesProps) => {
    return (
        <div className={styles.menuLinks}>
            <ul>
                {routes.map((oneMenuRoute: routeProperties) => {
                    return (
                        <MenuItems
                            oneMenuRoute={oneMenuRoute}
                            key={oneMenuRoute.path}
                        ></MenuItems>
                    );
                })}
            </ul>
        </div>
    );
};

export default React.memo(Routes);
