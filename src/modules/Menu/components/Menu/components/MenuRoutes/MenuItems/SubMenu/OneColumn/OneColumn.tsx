import React from "react";
import styles from "./OneColumn.module.scss";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import { childRoutes } from "@src/types/routeProperties";

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
                    <li className={styles.oneColumn__onePath} key={oneColumnRoute.path}>
                        <Link href={oneColumnRoute.path} className={styles.oneColumn__button}>
                            {t(`${oneColumnRoute.interName}`)}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default OneColumn;
