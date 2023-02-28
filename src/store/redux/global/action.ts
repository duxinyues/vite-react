/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 00:29:46
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 00:42:19
 * @FilePath: \vite-react\src\store\redux\global\action.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";
import { ThemeConfigProp } from "@/store/interface";

export const setToken = (token: string) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setThemeConfig = (themeConfig: ThemeConfigProp) => ({
  type: types.SET_THEME_CONFIG,
  payload: { ...themeConfig },
});
