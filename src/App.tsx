/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 19:56:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 22:57:00
 * @FilePath: \vite-react\src\App.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy, Suspense } from "react";
import { useRoutes, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import useTheme from "./hooks/useTheme";

const Layout = lazy(() => import("@/views/layout"));
const Login = lazy(() => import("@/views/login"));
const Dashboard = lazy(() => import("@/views/dashboard"));
const DataVisualize = lazy(() => import("@/views/dashboard/dataVisualize"));
const Home = lazy(() => import("@/views/home"));
const NoMatch = lazy(() => import("@/components/NoMatch"));

const loadRouter = (children: React.ReactElement) => (
  <Suspense
    fallback={
      <div className="react-container">
        <div className="progress"></div>
      </div>
    }
  >
    {children}
  </Suspense>
);
const Router = ({ token }: any) => {
  const element = useRoutes([
    {
      path: "/",
      element: loadRouter(<Layout />),

      children: [
        {
          path: "/",
          element: loadRouter(<Home />),
        },
        {
          path: "/dashboard",
          element: loadRouter(<Dashboard />),
        },
      ],
    },
    {
      path: "/login",
      element: loadRouter(<Login />),
    },
    {
      path: "/dataVisualize",
      element: loadRouter(<DataVisualize />),
    },
    { path: "*", element: loadRouter(<NoMatch />) },
  ]);
  return element;
};
function App(props: any) {
  console.log("App props", props);
  const { weakOrGray } = props;
  useTheme(weakOrGray);
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}
const mapStateToProps = (state: any) => {
  return state.global;
};
export default connect(mapStateToProps)(App);
