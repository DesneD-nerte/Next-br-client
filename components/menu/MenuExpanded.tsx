import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuExpanded.module.css";
import { routeProperties } from "../../types/routeProperties";
import { Routes } from "./components/Routes";
import SearchIcon from "./svg/icon-search.svg";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function MenuExpanded({ routes }: menuRoutesProps) {
    return (
        <header className={styles.menuHeader}>
            <nav className={styles.menuNav}>
                <div className={styles.menuContainer}>
                    <div className={styles.menuMain}>
                        <div className={styles.menuMain__left}>
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

                        <div className={styles.menuMain__right}>
                            <Link href={"./signIn"}>
                                <a className={styles.menuMain__right_button}>Sign In</a>
                            </Link>

                            <Link href={"./bag"}>
                                <a className={styles.menuMain__right_button}>Bag</a>
                            </Link>

                            <div
                                className={styles.iconCircle}
                                onClick={(e) => console.log(123)}
                            >
                                <SearchIcon className={styles.iconSearch} />
                            </div>
                        </div>
                    </div>

                    <Routes routes={routes} />
                </div>
            </nav>
        </header>
    );
}

export default MenuExpanded;
