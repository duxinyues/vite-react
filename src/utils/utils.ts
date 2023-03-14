/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 12:19:12
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 18:20:09
 * @FilePath: \vite-react\src\utils\utils.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { RouteObject } from "@/routers/interface";

export function getLocal(key: string) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key) as string);
  } catch (error) {
    return value;
  }
}

export function setLocal(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key: string) {
  window.localStorage.removeItem(key);
}

export function localClear() {
  window.localStorage.clear();
}

// 浏览器默认语言
export function getBrowserLang() {
  let browserLang = navigator.language;
    // ? window.navigator['language']
    // : window.navigator['browserLanguage'];
  let defaultBrowserLang = "";

  if (
    browserLang.toLowerCase() === "cn" ||
    browserLang.toLowerCase() === "zh" ||
    browserLang.toLowerCase() === "zh-cn"
  ) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }

  return defaultBrowserLang;
}

// 获取展开的菜单
export const getOpenKeys = (path: string) => {
  let newStr: string = "";
  let newArr: any[] = [];

  let arr = path.split("/").map((i) => "/" + i);
  for (let index = 1; index < arr.length - 1; index++) {
    newStr += arr[index];
    newArr.push(newStr);
  }

  return newArr;
};

export const searchRoute = (
  path: string,
  routes: RouteObject[] = []
): RouteObject => {
  let result = {};
  for (const iterator of routes) {
    if (iterator.path === path) return iterator;
    if (iterator.children) {
      const res = searchRoute(path, iterator.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};

/**
 * 递归遍历当前路由所有关联的路由，生成面包屑导航栏
 * @param path
 * @param menuList
 * @returns
 */
export const getBreadCrumbList = (
  path: string,
  menuList:any[]
) => {
  let tempPath: any[] = [];
  try {
    const getNodePath = (node:any) => {
      tempPath.push(node);
      if (node.path === path) {
        throw new Error("呵呵！结束了");
      }
      if (node.children && node.children.length > 0) {
        for (let index = 0; index < node.children.length; index++) {
          getNodePath(node.children[index]);
        }
        tempPath.pop(); // 在当前节点的子节点没有找到，那么就删除路径中的该节点
      } else {
        tempPath.pop(); //
      }
    };
    for (let index = 0; index < menuList.length; index++) {
      getNodePath(menuList[index]);
    }
  } catch (err) {
    return tempPath.map((item) => item.title);
  }
};

export const findAllBreadCrumb = (
  menuList:any[]
): { [key: string]: any } => {
  let handleBreadcrumbList: any = {};
  const loop = (menuItem:any) => {
    if (menuItem?.children?.length) {
      return menuItem.children.forEach((item: any) => loop(item));
    }

    return (handleBreadcrumbList[menuItem.path] = getBreadCrumbList(
      menuItem.path,
      menuList
    ));
  };

  menuList.forEach((item) => loop(item));
  return handleBreadcrumbList;
};

export const isType = (val: any) => {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;

  return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
};

export const deepCopy = <T>(obj: any): T => {
  let newObj: any;
  try {
    newObj = obj.push ? [] : {};
  } catch (err) {
    newObj = {};
  }
  for (let attr in obj) {
    if (typeof obj[attr] === "object") {
      newObj[attr] = deepCopy(obj[attr]);
    } else {
      newObj[attr] = obj[attr];
    }
  }
  return newObj;
};
