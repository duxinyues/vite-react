/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 15:46:07
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 18:12:43
 * @FilePath: \vite-react\src\store\redux\auth\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import { AnyAction } from "redux";
import { AuthState } from "@/store/interface";
import * as types from "@/store/types";

const authState = {
  authButtons: {},
  authRouter:  [{
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
        {
          title: "基础表单",
          key: "basicsForm",
          router: "/basicsForm",
        },
        // {
        //   title: "搜索表单",
        //   key: "searchForm",
        //   router: "/searchForm",
        // },
      ],
    },
    {
      title: "Echarts",
      key: "Echarts",
      router: null,
      children: [
        {
          title: "水型图",
          key: "waterChart",
          router: "/waterChart",
        },
        {
          title: "柱形图",
          key: "barChart",
          router: "/barChart",
        },
        {
          title: "曲线图",
          key: "curveChart",
          router: "/curveChart",
        },
        {
          title: "曲线面积图",
          key: "smoothChart",
          router: "/smoothChart",
        },
      ],
    },
    {
      title: "错误页面",
      key: "error",
      router: null,
      children: [
        {
          title: "403",
          key: "403",
          router: "/403",
        },
        {
          title: "404",
          key: "404",
          router: "/404",
        },
        {
          title: "500",
          key: "500",
          router: "/500",
        },
      ],
    },
  ],
};

export const auth = (state = authState, action: AnyAction) => {
  switch (action.type) {
    case types.SET_AUTH_BUTTONS:
      return {
        ...state,
        authButtons: {
          ...state.authButtons,
          ...action.payload,
        },
      };
    case types.SET_AUTH_ROUTER:
      return {
        ...state,
        authRouter: [...action.payload],
      };
    default:
      return state;
  }
};
