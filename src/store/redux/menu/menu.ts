/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:35:23
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-07-31 00:16:44
 * @FilePath: /vite-react/src/store/redux/menu/menu.ts
 * @Description: 左侧菜单，一般是由后端返回的
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
      {
        title: "表格查询模块",
        key: "order",
        router: "/order",
      },
      {
        title: "表单",
        key: "basicsForm",
        router: "/basicsForm",
      },
      // {
      //   title: "Excel表格",
      //   key: "excelTable",
      //   router: "/excel-table",
      // },
      {
        title: "签字",
        key: "canvas-sign",
        router: "/canvas-sign",
      },
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
