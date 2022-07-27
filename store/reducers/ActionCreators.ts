import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { IItem } from "../../models/IITem";
import { AppDispatch } from "../store";
import { itemsFetching, setSearch, setVisible } from "./SearchSlice";

export const fetchItems = (searchValue: string, limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setSearch(searchValue));
        dispatch(setVisible(true));

        const response = await axios.get<IItem[]>("http://localhost:5000/items", {params: {search: searchValue, limit: limit}});
        console.log(response.data);
        dispatch(itemsFetching(response.data));
    } catch(e) {
        throw new ApiError(500, "Server didn't responde");
    }
}