/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:59:58
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-14 23:57:38
 * @FilePath: \vite-react\src\routers\modules\error.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../utils/utlis";

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: "/403",
    element: lazyLoad(
      React.lazy(() => import("@/components/Error/403"))
    ),
    meta: {
      requiresAuth: false,
      title: "403页面",
      key: "403",
    },
  },
  {
    path: "/404",
    element: lazyLoad(
      React.lazy(() => import("@/components/Error/404"))
    ),
    meta: {
      requiresAuth: false,
      title: "404页面",
      key: "404",
    },
  },
  {
    path: "/500",
    element: lazyLoad(
      React.lazy(() => import("@/components/Error/500"))
    ),
    meta: {
      requiresAuth: false,
      title: "500页面",
      key: "500",
    },
  },
  {
    path: "*",
    element: lazyLoad(React.lazy(() => import("@/components/NoMatch"))),
  }
];

export default errorRouter;
