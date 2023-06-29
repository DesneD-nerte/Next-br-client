import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import router from "next/router";

import styles from "./MenuSearchForm.module.scss";

import { useAppDispatch } from "@store/hooks";
import { menuActions } from "@modules/Menu/reducer";
import { fetchItems } from "@modules/Menu/effects/getSearchMenuItems";
import { useDebounce } from "@hooks/useDebounce";

const SearchForm = () => {
    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    const dispatch = useAppDispatch();

    const { t } = useTranslation("menu");

    useEffect(() => {
        dispatch(fetchItems(debounced, 9));
    }, [debounced]);

    function handleEnter() {
        dispatch(menuActions.searchMenuActions.setVisible(false));
        router.push("/search");
    }

    return (
        <form className={styles.searchForm} onSubmit={handleEnter}>
            <div className={styles.inputContainer}>
                <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className={styles.inputContainer__input}
                    placeholder={t("searchPlaceholder")}
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
