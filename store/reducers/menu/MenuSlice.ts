import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    expanded: boolean;
    subMenu: boolean;
}

const initialState: MenuState = {
    expanded: true,
    subMenu: false,
};

export const menuSlice = createSlice({
    name: "menu",
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

export const { setExpandMenu, setSubMenu } = menuSlice.actions;

export default menuSlice.reducer;
