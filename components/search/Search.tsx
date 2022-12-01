import { Fragment } from "react";
import styles from "./Search.module.scss";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setVisible } from "@store/reducers/SearchSlice";
import { setExpandMenu } from "@store/reducers/MenuSlice";

import SearchForm from "@forms/search/SearchForm";
import SearchList from "./components/SearchList/SearchList";

export const Search = () => {
    const { visible } = useAppSelector((state) => state.search);

    const dispatch = useAppDispatch();

    function handleVisible() {
        dispatch(setVisible(!visible));
        dispatch(setExpandMenu(true));
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
