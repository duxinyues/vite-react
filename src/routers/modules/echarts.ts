/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:33:49
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-05 23:37:00
 * @FilePath: \vite-react\src\routers\modules\echarts.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";

const echartRouter: Array<RouteObject> = [
  {
    path: "/waterChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/waterChart"))),
  },
  {
    path: "/barChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/BarChart"))),
  },
  {
    path: "/curveChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/CurveCharts"))),
  },
  {
    path: "/SmoothChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/SmoothChart"))),
  },
];

export default echartRouter;
