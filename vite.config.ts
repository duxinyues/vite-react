/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 19:56:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-25 20:17:11
 * @FilePath: \vite\vite-react\vite.config.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
// 查找路径
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// 别名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
