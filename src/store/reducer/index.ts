import { combineReducers } from "redux";
import menuReducer from "./menu";
const reducers = combineReducers({
    menus: menuReducer,
});

export default reducers