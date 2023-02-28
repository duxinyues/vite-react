/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 19:56:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 00:05:20
 * @FilePath: \vite-react\vite.config.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import {viteBuildInfo} from "./build/info";
import { createStyleImportPlugin, AntdResolve } from 'vite-plugin-style-import'

const root: string = process.cwd();

// 查找路径
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
// 别名
const alias: Record<string, string> = {
  "@": pathResolve("src"),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PUBLIC_PATH, VITE_PORT } = loadEnv(mode, root, "");
  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [react(),viteBuildInfo(),createStyleImportPlugin({
      resolves:[AntdResolve()]
    })],
    resolve: {
      alias,
    },
    clearScreen: false,
    server: {
      host: "0.0.0.0",
      https: false,
      port: VITE_PORT,
      open: true,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {},
      // hmr: true,
    },
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve("index.html"),
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  };
});
