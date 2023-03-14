/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:52:33
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-14 20:58:21
 * @FilePath: \vite-react\src\routers\modules\home.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";
const homeRouter: Array<RouteObject> = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("@/views/home"))),
  },
  {
    path: "/home",
    element: lazyLoad(lazy(() => import("@/views/home"))),
  },
];

export default homeRouter;
