import Link from "next/link";
import React from "react";
import styles from "./FooterColumn.module.scss";

interface ILinks {
    name: string;
    href: string;
}

interface IFooterColumnProps {
    title: string;
    links: ILinks[];
}

const FooterColumn = (props: IFooterColumnProps) => {
    return (
        <div>
            <text>{props.title}</text>

            <ul className={styles.ulColumn}>
                {props.links.map((oneLink) => {
                    return (
                        <li className={styles.ulColumn__onePath}>
                            <Link href={oneLink.href}>
                                <a>{oneLink.name}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterColumn;
