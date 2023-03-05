/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:34:36
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-05 23:38:54
 * @FilePath: \vite-react\src\routers\utils\utlis.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import React, { Suspense } from "react";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <div className="react-container">
          <div className="progress"></div>
        </div>
      }
    >
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
