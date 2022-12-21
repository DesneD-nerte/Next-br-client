import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    expanded: boolean;
}

const initialState: MenuState = {
    expanded: true,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setExpandMenu: (state, action: PayloadAction<boolean>) => {
            state.expanded = action.payload;
        },
    },
});

export const { setExpandMenu } = menuSlice.actions;

export default menuSlice.reducer;
