import Link from "next/link";
import React from "react";
import styles from "./FooterColumn.module.scss";
import { useTranslation } from "@src/hooks/useTranslation";

interface ILinks {
    name: string;
    href: string;
}

interface IFooterColumnProps {
    title: string;
    links: ILinks[];
}

const FooterColumn = async (props: IFooterColumnProps) => {
    const { t } = await useTranslation("footer");

    return (
        <div>
            <text>{props.title}</text>

            <ul className={styles.ulColumn}>
                {props.links.map((oneLink) => {
                    return (
                        <li className={styles.ulColumn__onePath} key={oneLink.href}>
                            <Link href={oneLink.href}>{t(`${oneLink.name}`)}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterColumn;
