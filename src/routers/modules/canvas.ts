/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-07-30 23:45:42
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-07-31 00:14:28
 * @FilePath: /vite-react/src/routers/modules/canvas.ts
 * @Description: canvas相关组件
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";

const tableRouter: Array<RouteObject> = [
    {
        path: "/canvas-sign",
        element: lazyLoad(lazy(() => import("@/components/Canvas/sign"))),
    },
];

export default tableRouter;