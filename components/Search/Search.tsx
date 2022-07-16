import { FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchItems } from "../../store/reducers/ActionCreators";
import { setVisible } from "../../store/reducers/SearchSlice";
import SearchList from "./components/SearchList";
import styles from "./Search.module.css";
import { useRouter } from "next/router";

export const Search: FC<any> = () => {
    const router = useRouter();

    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems(debounced));
    }, [debounced]);

    function handleVisible() {
        dispatch(setVisible(true));
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            router.push("/search");
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={handleVisible}
                    onKeyDown={(e) => handleEnter(e)}
                    className={styles.container__input}
                    placeholder="What are you looking for?"
                ></input>
                <SearchList />
            </div>
        </form>
    );
};