import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./reducers/menu/MenuSlice";
import MenuSearchSlice from "./reducers/menu/MenuSearchSlice";

export const store = configureStore({
    reducer: {
        menuSearch: MenuSearchSlice,
        menu: MenuSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
