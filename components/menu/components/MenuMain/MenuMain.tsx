import Link from "next/link";
import React from "react";
import styles from "../../Menu.module.css";
import SearchIcon from "../../svg/icon-search.svg";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { setExpandMenu } from "../../../../store/reducers/MenuSlice";
import { setVisible } from "../../../../store/reducers/SearchSlice";
import MenuSearch from "./components/MenuSearch";

const MenuMain = (props: any) => {
    return (
        <div className={styles.menuMain}>
            <div className={styles.menuMain__left}>
                <button className={styles.menuMain__button}>Novosibirsk</button>
            </div>

            <Link href="/">
                <a className={styles.logo}>
                    <Image src="/brandImage.png" width={170} height={30}></Image>
                </a>
            </Link>

            <div className={styles.menuMain__right}>
                <Link href={"./signIn"}>
                    <a className={styles.menuMain__button}>Sign In</a>
                </Link>

                <Link href={"./bag"}>
                    <a className={styles.menuMain__button}>Bag</a>
                </Link>

                <MenuSearch />
            </div>
        </div>
    );
};

export default React.memo(MenuMain);
