import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";
import { routeProperties } from "../../types/routeProperties";
import { Routes } from "./components/Routes";
import SearchIcon from "./svg/icon-search.svg";

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
                            <Link href={"./signIn"}>
                                <a>Sign In</a>
                            </Link>

                            <Link href={"./bag"}>
                                <a>Bag</a>
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

export default Menu;
