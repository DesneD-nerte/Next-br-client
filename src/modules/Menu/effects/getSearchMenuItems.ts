import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { IItem } from "@models/IITem";
import { menuActions } from "../reducer";
import { AppDispatch } from "@store/store";

export const fetchItems = (searchValue: string, limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(menuActions.searchMenuActions.setSearch(searchValue));

        const response = await axios.get<IItem[]>("http://localhost:5000/items", {
            params: { search: searchValue, limit: limit },
        });

        dispatch(menuActions.searchMenuActions.itemsFetching(response.data));
    } catch (e) {
        throw new ApiError(500, "Server didn't responde");
    }
};
