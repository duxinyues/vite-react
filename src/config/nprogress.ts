/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 13:51:50
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 13:56:26
 * @FilePath: \vite-react\src\config\nprogress.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
    easing:"ease",
    speed:1000,
    showSpinner:true,
    trickleSpeed:200,
    minimum:0.3
})

export default NProgress