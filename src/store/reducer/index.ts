import { combineReducers } from "redux";
import menuReducer from "../redux/menu/menu";
const reducers = combineReducers({
    menus: menuReducer,
});

export default reducers