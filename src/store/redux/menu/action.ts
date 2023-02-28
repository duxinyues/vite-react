/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 22:26:29
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 22:58:53
 * @FilePath: \vite-react\src\store\redux\menu\useCollapse.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";

export const changeCollapse = (isCollapse: boolean) =>({
  type: types.MENU_COLLAPSES,
  payload: isCollapse,
});
