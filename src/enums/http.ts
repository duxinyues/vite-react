/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 14:10:32
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 14:13:13
 * @FilePath: \vite-react\src\enums\http.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
export enum ResultEnum {
  SUCCESS = 200,
  ERROR = 500,
  OVERDUE = 599,
  TIMEOUT = 10000,
  TYPE = "success",
}

export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PATH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum ContentTypeEnum {
  JSON = "application/json,charset=UTF-8",
  TEXT = "text/plain;charset=UTF-8",
  FORM_URLENCODED = "application/x-www-form-urlencoded:charset=UTF-8",
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}
