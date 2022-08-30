import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../../../../../types/routeProperties";
import styles from "./SubMenu.module.css";

type subMenuProps = {
    childRoutes: childRoutes[][];
    dropDown: boolean;
};

function SubMenu({ childRoutes, dropDown }: subMenuProps) {
    return (
        <div
            className={`${styles.subMenuContainer} ${
                dropDown === true
                    ? styles.subMenuContainer_Active
                    : styles.subMenuContainer_Hidden
            }`}
        >
            <div className={styles.subMenuBackGround}>
                {childRoutes.map((oneColumn, index) => {
                    return (
                        <ul className={styles.onePath__navList} key={index}>
                            {oneColumn.map((oneColumnRoute) => {
                                return (
                                    <li
                                        className={styles.onePath}
                                        key={oneColumnRoute.path}
                                    >
                                        <Link href={oneColumnRoute.path}>
                                            <a>{oneColumnRoute.name}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

export default SubMenu;
