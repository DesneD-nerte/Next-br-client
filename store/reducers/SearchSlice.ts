import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    searchValue: string
    visible: boolean
}

const initialState: SearchState = {
    searchValue: "",
    visible: false
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        }
    }
})

export const { setSearch, setVisible } = searchSlice.actions;

export default searchSlice.reducer;