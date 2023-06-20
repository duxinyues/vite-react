/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:34:44
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 22:20:38
 * @FilePath: \vite-react\src\store\store.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxPromise from "redux-promise"
import reducers from './reducer';
// redux持久化保存
const storageConfig = {
  key: "root",
  storage,
};
// 中间件
const middleware = [thunk];
const logger = createLogger()

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = persistReducer(storageConfig, reducers);
// 创建store
export let store = legacy_createStore(configStore, composeEnhancers(
  applyMiddleware(...middleware, reduxPromise,logger)
));
// 创建持久化的store
export let persistor = persistStore(store);