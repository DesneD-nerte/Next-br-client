import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./reducers/app/AppSlice";
import menu from "@modules/Menu/reducer";

export const store = configureStore({
    reducer: {
        app: AppSlice,
        menu: menu,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
