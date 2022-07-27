import React, { FC } from "react";
import { useAppSelector } from "../../../../store/hooks";
import SearchItemImage from "../SearchItemImage/SearchItemImage";
import SearchItemMenu from "../SearchItemMenu/SearchItemMenu";
import styles from "./SearchList.module.css";

const SearchList: FC<any> = React.memo(() => {
    const { searchValue, visible, items } = useAppSelector((state) => state.search);

    return (
        <div className={styles.searchedContainer}>
            <section className={styles.sectionContainer__Left}>
                <SearchItemMenu />
            </section>
            <div className={styles.separator}></div>
            <section className={styles.sectionContainer__Right}>
                {items.length ? (
                    items.map((item) => <SearchItemImage key={item.id} item={item} />)
                ) : (
                    <span>Sorry we couldn't find any items</span>
                )}
            </section>
        </div>
    );
});

export default SearchList;
