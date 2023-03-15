/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 15:31:59
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 00:04:05
 * @FilePath: \vite-react\src\routers\utils\auth.tsx
 * @Description: 路由权限
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useLocation, Navigate } from "react-router-dom";
import { AxiosCanceler } from "@/api/help/axiosCancel";
import { searchRoute } from "@/utils/utils";
import { rootRouter } from "@/routers";
import { store } from "@/store/store";

const axiosCancel = new AxiosCanceler();

const Auth = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);
  
  // 跳转之前清除所有的请求
  axiosCancel.removeAllPending();
  // 判断当前路由是否需要权限
  if (!route.meta?.requiresAuth) return props.children;

  const token = store.getState().global.token;
  
  if (!token) return <Navigate to="/login" replace />;

  const dynamicRouter = store.getState().auth.authRouter;
  const staticRouter = ["/home", "/403","/changeAuth"];
  const routerList = [...dynamicRouter,...staticRouter];
  if (routerList.indexOf(pathname) == -1) {
    return <Navigate to="/403" />;
  }
  return props.children;
};

export default Auth;
