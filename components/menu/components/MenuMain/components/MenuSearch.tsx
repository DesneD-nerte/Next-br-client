import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { setExpandMenu } from "../../../../../store/reducers/MenuSlice";
import { setVisible } from "../../../../../store/reducers/SearchSlice";
import SearchIcon from "../../../svg/icon-search.svg";
import styles from "./MenuSearch.module.scss";
import { Search } from "../../../../Search/Search";

const MenuSearch = () => {
    const { visible } = useAppSelector((state) => state.search);

    const dispatch = useAppDispatch();

    const handleSearch = () => {
        if (visible) {
            const { pageYOffset } = window;
            if (pageYOffset === 0) {
                dispatch(setExpandMenu(true));
            }
            dispatch(setVisible(false));
        } else {
            dispatch(setVisible(true));
            dispatch(setExpandMenu(false));
        }
    };

    return (
        <>
            <div className={styles.iconCircle} onClick={handleSearch}>
                <SearchIcon className={styles.iconSearch} />
            </div>
            {visible && <Search></Search>}
        </>
    );
};

export default MenuSearch;
