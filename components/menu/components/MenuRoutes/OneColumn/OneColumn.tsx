import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../../types/routeProperties";
import styles from "./OneColumn.module.scss";

interface OneColumnMenuRoutesProps {
    oneColumn: childRoutes[];
}

const OneColumn = (props: OneColumnMenuRoutesProps) => {
    const { oneColumn } = props;

    return (
        <ul className={styles.oneColumn}>
            {oneColumn.map((oneColumnRoute) => {
                return (
                    <li
                        className={styles.oneColumn__onePath}
                        key={oneColumnRoute.path}
                    >
                        <Link href={oneColumnRoute.path}>
                            <a className={styles.oneColumn__button}>
                                {oneColumnRoute.name}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default OneColumn;
