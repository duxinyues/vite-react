/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:34:44
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-27 17:41:31
 * @FilePath: \vite-react\src\store\store.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import {legacy_createStore,applyMiddleware,compose}  from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from './reducer';
const storageConfig = {
  key: "root",
  storage,
};
const  middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = persistReducer(storageConfig,reducers);
export let store = legacy_createStore(configStore,composeEnhancers(
  applyMiddleware(...middleware)
));
export let persistor = persistStore(store);