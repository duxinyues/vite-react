/**
 * 表格类组件
 */
import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";

const tableRouter: Array<RouteObject> = [
  {
    path: "/excel-table",
    element: lazyLoad(lazy(() => import("@/components/Table/excelTable"))),
  },
];

export default tableRouter;