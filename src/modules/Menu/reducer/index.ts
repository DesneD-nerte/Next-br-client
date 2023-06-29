import { combineReducers } from "@reduxjs/toolkit";
import mainMenuSlice from "./MainMenuSlice";
import searchMenuSlice from "./MenuSearchSlice";

const menuReducer = combineReducers({
    mainMenu: mainMenuSlice.reducer,
    searchMenu: searchMenuSlice.reducer,
});

export const menuActions = {
    mainMenuActions: mainMenuSlice.actions,
    searchMenuActions: searchMenuSlice.actions,
};

export default menuReducer;
