import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { childRoutes } from "../../../../../types/routeProperties";
import styles from "./OneColumn.module.scss";

interface OneColumnMenuRoutesProps {
    oneColumn: childRoutes[];
}

const OneColumn = (props: OneColumnMenuRoutesProps) => {
    const { oneColumn } = props;

    const { t } = useTranslation("menu");

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
                                {t(`${oneColumnRoute.interName}`)}
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default OneColumn;
