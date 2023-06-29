import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    expanded: boolean;
    subMenu: boolean;
}

const initialState: MenuState = {
    expanded: true,
    subMenu: false,
};

const mainMenuSlice = createSlice({
    name: "mainMenuSlice",
    initialState,
    reducers: {
        setExpandMenu: (state, action: PayloadAction<boolean>) => {
            state.expanded = action.payload;
        },
        setSubMenu: (state, action: PayloadAction<boolean>) => {
            state.subMenu = action.payload;
        },
    },
});

export default mainMenuSlice;
