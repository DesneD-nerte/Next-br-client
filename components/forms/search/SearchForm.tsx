import router from "next/router";
import React, { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useAppDispatch } from "../../../store/hooks";
import { fetchItems } from "../../../store/reducers/ActionCreators";
import { setVisible } from "../../../store/reducers/SearchSlice";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems(debounced, 9));
    }, [debounced]);

    function handleEnter() {
        dispatch(setVisible(false));
        router.push("/search");
    }

    return (
        <form className={styles.searchForm} onSubmit={handleEnter}>
            <div className={styles.inputContainer}>
                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className={styles.inputContainer__input}
                    placeholder="What are you looking for?"
                ></input>
                <button
                    type="submit"
                    value="Submit"
                    className={styles.inputContainer__submit}
                ></button>
            </div>
        </form>
    );
};

export default SearchForm;
