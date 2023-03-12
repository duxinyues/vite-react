/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 17:48:15
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 18:00:38
 * @FilePath: \vite-react\src\routers\modules\auth.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../utils/utlis";

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: "/changeAuth",
    element: lazyLoad(
      React.lazy(() => import("@/views/auth"))
    ),
    meta: {
      requiresAuth: true,
      title: "权限配置",
      key: "/changeAuth",
    },
  },
];

export default errorRouter;