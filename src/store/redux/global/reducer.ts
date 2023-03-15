/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 00:29:37
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 17:05:46
 * @FilePath: \vite-react\src\store\redux\global\reducer.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { AnyAction } from "redux";
import * as types from "@/store/types";
import { cloneDeep } from "lodash";

const globalState = {
  token: "",
  userInfo: null,
  themeConfig: {
    // 默认 primary 主题颜色
    primary: "#1890ff",
  },
  // 深色模式
  isDark: false,
  // 色弱模式(weak) || 灰色模式(gray)
  weakOrGray: "",
  // 面包屑导航
  breadcrumb: true,
  // 页脚
  footer: true,
  waterMark: {
    content: "读心悦",
    fontSize: 16,
    color: { r: 0, g: 0, b: 0, a: 0.15 },
    zIndex: 1000,
    rotate: -12,
    width: "100",
    height: "100",
  },
};

const globalReducer = (state = globalState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_THEME_CONFIG:
      return {
        ...state,
        themeConfig: action.payload,
      };
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case types.SET_WEAKORGRAY:
      return {
        ...state,
        weakOrGray: action.payload,
      };
    case types.SET_VISIBLE_FOOTER:
      return {
        ...state,
        footer: action.payload,
      };
    case types.SET_USERINFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case types.SET_WATERMARK:
      return {
        ...state,
        waterMark: cloneDeep(action.payload),
      };
    default:
      return state;
  }
};
export default globalReducer;
