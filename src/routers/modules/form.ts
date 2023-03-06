/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-06 15:02:04
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-06 15:38:39
 * @FilePath: \vite-react\src\routers\modules\form.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";

const formRouter: Array<RouteObject> = [
  {
    path: "/searchForm",
    element: lazyLoad(lazy(() => import("@/components/form"))),
  },
];

export default formRouter;
