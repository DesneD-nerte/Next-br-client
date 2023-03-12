import React from "react";
import styles from "./MenuSearch.module.scss";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";
import { setVisible } from "@root/store/reducers/menu/MenuSearchSlice";
import { Search } from "../../../Search";


import SearchIcon from "@svg/menu/icon-search.svg";

const MenuSearch = () => {
    const { visible } = useAppSelector((state) => state.menuSearch);

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
