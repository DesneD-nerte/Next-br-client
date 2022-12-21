import { Fragment } from "react";
import styles from "./Search.module.scss";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setVisible } from "@root/store/reducers/menu/MenuSearchSlice";
import { setExpandMenu } from "@store/reducers/menu/MenuSlice";

import SearchForm from "@root/components/forms/menuSearch/MenuSearchForm";
import SearchList from "./components/SearchList/SearchList";

export const Search = () => {
    const { visible } = useAppSelector((state) => state.menuSearch);

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
