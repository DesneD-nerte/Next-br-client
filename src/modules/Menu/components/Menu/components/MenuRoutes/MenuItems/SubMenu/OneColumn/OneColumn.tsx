import React from "react";
import styles from "./OneColumn.module.scss";
import Link from "next/link";

import { childRoutes } from "@src/types/routeProperties";
import { useTranslation } from "@src/hooks/useTranslation";

interface OneColumnMenuRoutesProps {
    oneColumn: childRoutes[];
}

const OneColumn = async (props: OneColumnMenuRoutesProps) => {
    const { oneColumn } = props;

    const { t } = await useTranslation("menu");

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
