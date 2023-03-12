/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 13:47:12
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 15:24:10
 * @FilePath: \vite-react\src\api\modules\login.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Login } from "../interface";
import http from "@/api";

export const loginApi = (params:Login.ReqLoginFom)=>{
    return http.post<Login.ResLogin>("/login",params)
}