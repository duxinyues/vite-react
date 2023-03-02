/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:35:23
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 09:19:53
 * @FilePath: \vite-react\src\store\redux\menu\menu.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";
const menuState = [
  {
    title: "首页",
    key: "home",
    router: "/",
  },
  {
    title: "可视化",
    key: "dataScreen",
    router: "/dataScreen",
  },
  {
    title: "组件",
    key: "component",
    router: null,
    children: [
      // {
      //   title: "dashboard",
      //   key: "1-1",
      //   router: "/dashboard",
      //   component: "Dashboard",
      // },
    ],
  },
];
export default function menuReducer(
  state = {
    menuState,
    isCollapse: false,
  },
  action: any
) {
  switch (action.type) {
    case types.MENU_COLLAPSES:
      return {
        ...state,
        isCollapse: action.payload,
      };
    default:
      return { ...state };
  }
}
