/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 13:41:57
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-14 22:44:36
 * @FilePath: \vite-react\src\api\interface\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
export interface Result {
  code: string;
  message: string;
  
}

export interface ResultData<T = any> extends Result {
  data?: T;
}

//分页
export interface ResPage<T> {
  dataList: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

export namespace Login {
  export interface ReqLoginFom {
    username: string;
    password: string;
  }
  export interface ResAuthButtons {
    [propName: string]: any;
  }
  export interface ResLogin {
    accessToken: string;
    username: string;
    message:string,
    data:any
  }
}
