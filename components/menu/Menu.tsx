import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";
import { routeProperties } from "../../types/routeProperties";

// type routeProperties = {
//     name: string;
//     path: string;
// };

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function Menu({ routes }: menuRoutesProps) {
    return (
        <header>
            <nav className={styles.menuNav}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuMain}>
                        <div className={styles.menuMain_left}>
                            <button className="">Novosibirsk</button>
                        </div>

                        <Link href="/">
                            <a>
                                <Image
                                    src="/brandImage.png"
                                    width={170}
                                    height={30}
                                ></Image>
                            </a>
                        </Link>

                        <div className={styles.menuMain_right}>
                            <button>Sign In</button>

                            <button>Bag</button>

                            <button>Search</button>
                        </div>
                    </div>

                    <div className={styles.menuLinks}>
                        <ul>
                            {routes.map((oneMenuRoute: any) => {
                                return (
                                    <li className={styles.onePath}>
                                        <Link href={oneMenuRoute.path}>
                                            <a className={styles.onePath__navLink}>
                                                {oneMenuRoute.name}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* <ul>
                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 1</a>
                            </Link>

                            <ul className={styles.onePath__navList}>
                                <li className={styles.onePath__navItem}>
                                    <Link href="/">
                                        <a className={styles.onePath__navLink}>
                                            Скрытое 1
                                        </a>
                                    </Link>
                                </li>

                                <li className={styles.onePath__navItem}>
                                    <Link href="/">
                                        <a className={styles.onePath__navLink}>
                                            Скрытое 1
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 2</a>
                            </Link>
                        </li>
                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 3</a>
                            </Link>
                        </li>
                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 4</a>
                            </Link>
                        </li>
                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 5</a>
                            </Link>
                        </li>
                        <li className={styles.onePath}>
                            <Link href="/">
                                <a>Пункт 6</a>
                            </Link>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </header>
    );
}

export default Menu;
