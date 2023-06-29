import React from "react";
import styles from "./SearchList.module.scss";

import { useAppSelector } from "@store/hooks";
import SearchItemMenu from "../SearchItemMenu/SearchItemMenu";
import SearchItemImage from "../SearchItemImage/SearchItemImage";

const SearchList = () => {
    const { items } = useAppSelector((state) => state.menuSearch);

    return (
        <div className={styles.searchedContainer}>
            <section className={styles.searchedContainer__Left}>
                <SearchItemMenu />
            </section>

            <div className={styles.searchedContainer__separator}></div>

            <section className={styles.searchedContainer__Right}>
                {items.length ? (
                    items.map((item) => <SearchItemImage key={item.id} item={item} />)
                ) : (
                    <span>Sorry we couldn`t find any items</span>
                )}
            </section>
        </div>
    );
};

export default React.memo(SearchList);
