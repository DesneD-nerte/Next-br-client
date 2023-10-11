import React, { Suspense } from "react";
import styles from "./Routes.module.scss";

import MenuItems from "./MenuItems/MenuItems";
import { routeProperties } from "@src/types/routeProperties";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

const MenuRoutes = ({ routes }: menuRoutesProps) => {
    return (
        <ul className={styles.menuLinks}>
            {routes.map((oneMenuRoute: routeProperties) => {
                return (
                    <>
                        {/* @ts-expect-error Server Component */}
                        <MenuItems oneMenuRoute={oneMenuRoute} key={oneMenuRoute.path}></MenuItems>
                    </>
                );
            })}
        </ul>
    );
};

export { MenuRoutes };
