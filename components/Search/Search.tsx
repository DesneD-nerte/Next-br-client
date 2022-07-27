import { FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchItems } from "../../store/reducers/ActionCreators";
import { setVisible } from "../../store/reducers/SearchSlice";
import SearchList from "./components/SearchList/SearchList";
import styles from "./Search.module.css";
import { useRouter } from "next/router";
import { setExpand } from "../../store/reducers/MenuSlice";

export const Search: FC<any> = () => {
    const router = useRouter();

    const { visible } = useAppSelector((state) => state.search);

    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems(debounced, 9));
    }, [debounced]);

    function handleVisible() {
        dispatch(setVisible(!visible));
        dispatch(setExpand(true));
    }

    function handleEnter(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            router.push("/search");
        }
    }

    return (
        <>
            <div className={styles.wrapperSearch} onMouseDown={handleVisible}></div>

            <div className={styles.formPosition}>
                <form className={styles.form}>
                    <div className={styles.container}>
                        <div className={styles.container__input_wrapper}>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => handleEnter(e)}
                                className={styles.container__input}
                                placeholder="What are you looking for?"
                            ></input>
                        </div>
                        <SearchList />
                    </div>
                </form>
            </div>
        </>
    );
};
