import React from "react";
import { childRoutes } from "@root/types/routeProperties";

import OneColumn from "./OneColumn/OneColumn";
import styles from "./SubMenu.module.scss";

type subMenuProps = {
    childRoutes: childRoutes[][];
    dropDown: boolean;
};

function SubMenu({ childRoutes, dropDown }: subMenuProps) {
    return (
        <div
            className={`${
                dropDown === true
                    ? styles.onePath__subMenuContainer_active
                    : styles.onePath__subMenuContainer_hidden
            }`}
        >
            <div className={styles.onePath__subMenuContainer_content}>
                {childRoutes.map((oneColumn, index) => {
                    return <OneColumn oneColumn={oneColumn} key={index} />;
                })}
            </div>
        </div>
    );
}

export default SubMenu;
