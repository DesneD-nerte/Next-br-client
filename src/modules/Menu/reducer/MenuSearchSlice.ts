import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "@models/IITem";

interface SearchState {
    searchValue: string;
    visible: boolean;
    items: IItem[];
}

const initialState: SearchState = {
    searchValue: "",
    visible: false,
    items: [],
};

const menuSearchSlice = createSlice({
    name: "menuSearch",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        itemsFetching: (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload;
        },
    },
});

export default menuSearchSlice;
