import { lazy } from "react";
import { RouteObject } from "../interface";
import lazyLoad from "../utils/utlis";
const homeRouter: Array<RouteObject> = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("@/views/home"))),
  },
];

export default homeRouter;
