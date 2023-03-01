/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:36:30
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 18:42:36
 * @FilePath: \vite-react\src\store\reducer\index.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { combineReducers } from "redux";
import menuReducer from "../redux/menu/menu";
import globalReducer from "../redux/global/reducer";
const reducers = combineReducers({
    menus: menuReducer,
    global:globalReducer
});

export default reducers