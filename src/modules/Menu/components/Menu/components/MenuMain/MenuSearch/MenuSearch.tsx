"use client";

import React from "react";
import styles from "./MenuSearch.module.scss";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { menuActions } from "../../../../../reducer";
import { Search } from "../../../../Search";

import SearchIcon from "@svg/menu/icon-search.svg";

const MenuSearch = () => {
    const { visible } = useAppSelector((state) => state.menu.searchMenu);

    const dispatch = useAppDispatch();

    const handleSearch = () => {
        if (visible) {
            const { pageYOffset } = window;
            if (pageYOffset === 0) {
                dispatch(menuActions.mainMenuActions.setExpandMenu(true));
            }
            dispatch(menuActions.searchMenuActions.setVisible(false));
        } else {
            dispatch(menuActions.searchMenuActions.setVisible(true));
            dispatch(menuActions.mainMenuActions.setExpandMenu(false));
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
