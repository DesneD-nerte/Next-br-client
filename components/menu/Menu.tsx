import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";
import { routeProperties } from "../../types/routeProperties";
import { Routes } from "./components/Routes";

// type routeProperties = {
//     name: string;
//     path: string;
// };

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function Menu({ routes }: menuRoutesProps) {
    return (
        <header className={styles.menuHeader}>
            <nav className={styles.menuNav}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuMain}>
                        <div className={styles.menuMain_left}>
                            <button className="">Novosibirsk</button>
                        </div>

                        <Link href="/">
                            <a className={styles.logo}>
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

                    <Routes routes={routes} />
                </div>
            </nav>
        </header>
    );
}

export default Menu;
