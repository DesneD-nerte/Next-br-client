import React, { FC } from "react";
import { useAppSelector } from "../../../store/hooks";
import SearchItem from "./SearchItem";
import styles from "./SearchList.module.css";

const SearchList: FC<any> = () => {
    const { searchValue, visible, items } = useAppSelector((state) => state.search);

    return (
        <div className={styles.searchedContainer}>
            <section className={styles.sectionContainer}>
                {items.length ? (
                    items.map((item) => <SearchItem key={item.id} item={item} />)
                ) : (
                    <span>Sorry we couldn't find any items</span>
                )}
            </section>
            <section className={styles.sectionContainer}>images</section>
        </div>
    );
};

export default SearchList;
