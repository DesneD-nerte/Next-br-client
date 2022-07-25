import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Menu.module.css";
import { routeProperties } from "../../types/routeProperties";
import { Routes } from "./components/Routes";
import SearchIcon from "./svg/icon-search.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Search } from "../Search/Search";
import { setVisible } from "../../store/reducers/SearchSlice";

type menuRoutesProps = {
    routes: Array<routeProperties>;
};

function MenuExpanded({ routes }: menuRoutesProps) {
    const { expanded } = useAppSelector((state) => state.menu);
    const { visible } = useAppSelector((state) => state.search);

    const dispatch = useAppDispatch();

    const handleSearch = () => {
        dispatch(setVisible(!visible));
    };

    return (
        <header className={styles.menuHeader}>
            <nav className={styles.menuNav}>
                <div
                    className={
                        expanded
                            ? styles.menuContainer_Expanded
                            : styles.menuContainer_Hidden
                    }
                >
                    <div className={styles.menuMain}>
                        <div className={styles.menuMain__left}>
                            <button className={styles.menuMain__button}>
                                Novosibirsk
                            </button>
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
                                <a className={styles.menuMain__button}>Sign In</a>
                            </Link>

                            <Link href={"./bag"}>
                                <a className={styles.menuMain__button}>Bag</a>
                            </Link>

                            <div className={styles.iconCircle} onClick={handleSearch}>
                                <SearchIcon className={styles.iconSearch} />
                            </div>
                        </div>
                    </div>

                    <Routes routes={routes} />
                </div>
            </nav>

            {visible && <Search></Search>}
        </header>
    );
}

export default MenuExpanded;
