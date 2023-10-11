"use client";

import { Fragment } from "react";
import styles from "./Search.module.scss";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { menuActions } from "@modules/Menu/reducer";
import SearchForm from "@src/components/forms/menuSearch/MenuSearchForm";
import SearchList from "../SearchList/SearchList";

const Search = () => {
    const { visible } = useAppSelector((state) => state.menu.searchMenu);

    const dispatch = useAppDispatch();

    function handleVisible() {
        dispatch(menuActions.searchMenuActions.setVisible(!visible));
        dispatch(menuActions.mainMenuActions.setExpandMenu(true));
    }

    return (
        <Fragment>
            <div className={styles.wrapperSearch} onMouseDown={handleVisible}></div>

            <div className={styles.searchContainer}>
                <SearchForm />
                <SearchList />
            </div>
        </Fragment>
    );
};

export default Search;
