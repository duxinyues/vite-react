/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-09 19:27:10
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-09 19:52:40
 * @FilePath: \vite-react\test.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
const p = function () {
    return new Promise((resolve, reject) => {
        resolve(89)
    })
}
const timeout = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("访问超时" + time + "ms"))
        }, time)
    })
}
function getData() {
    return Promise.race([p(), timeout(10000)])
}

getData().then(res => {
    console.log("res", res)
}).catch(err => {
    console.log("error", err)
})