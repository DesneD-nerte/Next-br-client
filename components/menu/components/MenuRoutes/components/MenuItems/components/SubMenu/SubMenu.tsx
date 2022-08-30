import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../../../../../types/routeProperties";
import OneColumn from "./components/OneColumn";
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
                    ? styles.subMenuContainer__active
                    : styles.subMenuContainer__hidden
            }`}
        >
            <div className={styles.subMenuContainer__content}>
                {childRoutes.map((oneColumn, index) => {
                    return <OneColumn oneColumn={oneColumn} key={index} />;
                })}
            </div>
        </div>
    );
}

export default SubMenu;
