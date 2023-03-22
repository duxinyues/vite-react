/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-16 17:24:27
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-16 17:25:07
 * @FilePath: \vite-react\src\routers\modules\order.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";
const orderRouter: Array<RouteObject> = [
  {
    path: "/order",
    element: lazyLoad(lazy(() => import("@/views/order"))),
  },
  {
    path: "/addOrder",
    element: lazyLoad(lazy(() => import("@/views/order/add"))),
  },
];

export default orderRouter;
