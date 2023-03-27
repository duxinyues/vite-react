/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-15 14:22:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-27 11:17:03
 * @FilePath: \vite-react\vite.config.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteBuildInfo } from "./build/info";
import { createStyleImportPlugin, AntdResolve } from "vite-plugin-style-import";
import vitePluginImp from "vite-plugin-imp";
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
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_DROP_CONSOLE } = loadEnv(
    mode,
    root,
    ""
  );
  return {
    base: VITE_PUBLIC_PATH,
    root,
    plugins: [
      react(),
      viteBuildInfo(),
      // createStyleImportPlugin({
      //   resolves: [AntdResolve()],
      // }),
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      }),
    ],
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 引入 base.scss 这样就可以在全局中使用 base.scss中预定义的变量了
          // 给导入的路径最后加上 ;
          additionalData: '@import "@/styles/theme/base.scss";',
        },
      },
    },
    resolve: {
      alias,
    },
    clearScreen: false,
    esbuild: {
      pure: VITE_DROP_CONSOLE ? ["console.log", "debugger"] : [],
    },
    server: {
      host: "0.0.0.0",
      https: false,
      port: VITE_PORT,
      open: true,
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {
        // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
        "/api": {
          target: "http://47.108.65.133:8098",
          // target: "http://localhost:8098/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
      hmr: true,
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
