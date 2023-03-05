import { lazy } from "react";
import {  useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "./utils/utlis";

// * 导入所有router
const metaRouters = import.meta.globEager("./modules/*.ts");

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

console.log("路由", routerArray);

export const rootRouter = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("@/views/layout"))),
    children: [...routerArray],
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/views/login"))),
  },
  {
    path: "/dataScreen",
    element: lazyLoad(lazy(() => import("@/views/dataScreen"))),
  },
  {
    path: "*",
    element: lazyLoad(lazy(() => import("@/components/NoMatch"))),
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
