/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 19:56:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 20:33:38
 * @FilePath: \vite-react\src\App.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
const Layout = lazy(() => import("@/views/layout"));
const loadRouter = (children: React.ReactElement) => (
  <Suspense
    fallback={<div className="react-container"><div className="progress"></div></div>}
  >
    {children}
  </Suspense>
);

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: loadRouter(<Layout />),
      children: [
        {
          index: true,
          path: "/",
          element: loadRouter(<div>首页</div>),
        },
      ],
    },
    {
      path: "/components",
      element: loadRouter(<Layout />),
      children: [
        {
          index: true,
          path: "/components/dashboard",
          element: loadRouter(<div>uuuu</div>),
        },
      ],
    },
  ]);
  return element;
}

export default App;
