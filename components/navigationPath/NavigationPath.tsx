import Link from "next/link";
import React from "react";
import styles from "./navigationPath.module.css";

function NavigationPath() {
    const path = ["/", "/targeted-training"];

    return (
        <nav>
            <ol>
                {/* {path.map((onePath) => {
                    return (
                        <Link href={onePath}>
                            <a>Домой</a>
                        </Link>
                    );
                })} */}
                <li className={styles.onePath}>
                    <Link href="/">
                        <a>Домой</a>
                    </Link>
                </li>
                <li className={styles.onePath}>
                    <Link href="/">
                        <a>Discover</a>
                    </Link>
                </li>
                <li className={styles.onePath}>
                    <Link href="/targeted-training">
                        <a>Целевое обучение</a>
                    </Link>
                </li>
            </ol>
        </nav>
    );
}

export default NavigationPath;
