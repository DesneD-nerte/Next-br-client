import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./reducers/SearchSlice";

export const store = configureStore({
    reducer: {
        search: SearchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;