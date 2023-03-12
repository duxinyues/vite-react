/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 00:38:11
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 00:38:20
 * @FilePath: \vite-react\src\store\interface\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
/* themeConfigProp */
export interface ThemeConfigProp {
  primary: string;
  isDark: boolean;
  weakOrGray: string;
  breadcrumb: boolean;
  tabs: boolean;
  footer: boolean;
}

/* GlobalState */
export interface GlobalState {
  token: string;
  userInfo: any;
  themeConfig: ThemeConfigProp;
}

export interface AuthState {
  authRouter: string[];
  authButtons: {
    [propName: string]: any;
  };
}
