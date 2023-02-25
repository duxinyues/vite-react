/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 21:17:43
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-25 21:23:09
 * @FilePath: \vite\types\global.d.ts
 * @Description: 全局类型定义
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

// 打包压缩格式类型声明
type ViteCompression =
  | "none"
  | "gzip"
  | "brotli"
  | "both"
  | "gzip-clear"
  | "brotli-clear"
  | "both-clear";

/**
 * 全局定义环境变量类型
 */

interface ViteEnv {
  VITE_PORT: number;
  VITE_PUBLIC_PATH: string;
  VITE_ROUTER_HISTORY: string;
  VITE_COMPRESSION: ViteCompression;
}

interface PackageOpt {
  /** 文件夹名（默认：`dist`） */
  folder?: string;
  /** 是否返回已经转化好单位的包总大小（默认：`true`） */
  format?: boolean;
  /** 回调函数，返回包总大小（单位：字节） */
  callback: CallableFunction;
}