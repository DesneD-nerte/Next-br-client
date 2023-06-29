import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    isMobile: boolean | null;
}

const initialState: AppState = {
    isMobile: null
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            console.log('redux', action.payload);
            state.isMobile = action.payload;
        },
    },
});

export const { setIsMobile } = appSlice.actions;

export default appSlice.reducer;
