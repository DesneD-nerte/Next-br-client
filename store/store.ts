import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./reducers/MenuSlice";
import SearchSlice from "./reducers/SearchSlice";

export const store = configureStore({
    reducer: {
        search: SearchSlice,
        menu: MenuSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;