import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchItems } from "../../store/reducers/ActionCreators";
import SearchItem from "./components/SearchItem";
import SearchList from "./components/SearchList";

export const Search: FC<any> = () => {
    const [search, setSearch] = useState("");
    const debounced = useDebounce(search);

    const { searchValue, visible, items } = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems(debounced));
        console.log(items);
    }, [debounced]);

    return (
        <form>
            <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <SearchList />
        </form>
    );
};
