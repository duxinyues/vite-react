/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 00:56:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 15:59:49
 * @FilePath: \vite-react\src\hooks\useTheme.ts
 * @Description: 设置主题
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { ThemeConfigProp } from "@/store/interface";

const useTheme = (weakOrGray:string) => {
  // const { weakOrGray } = themeConfig;
  const initTheme = () => {
    // 灰色、弱色切换
    const body = document.documentElement as HTMLElement;
    if (!weakOrGray) {
      body.setAttribute("style", "");
    }
    if (weakOrGray === "weak") {
      console.log("色弱模式(weak)")
      body.setAttribute("style", "filter:invert(80%)");
    }
    if (weakOrGray === "gray") {
      console.log("灰色模式(gray)")
      body.setAttribute("style", "filter:grayscale(1)");
    }
  };
  initTheme();
  return {
    initTheme,
  };
};

export default useTheme;
