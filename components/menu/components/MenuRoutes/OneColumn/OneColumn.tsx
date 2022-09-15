import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../../types/routeProperties";
import styles from "./OneColumn.module.scss";

interface OneColumnMenuRoutesProps {
    oneColumn: childRoutes[];
    key: string | number;
}

const OneColumn = (props: OneColumnMenuRoutesProps) => {
    const { oneColumn, key } = props;

    return (
        <ul className={styles.oneColumn} key={key}>
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
