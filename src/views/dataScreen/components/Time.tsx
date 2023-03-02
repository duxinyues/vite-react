/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-02 00:05:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 09:34:03
 * @FilePath: \vite-react\src\views\dataScreen\components\Time.tsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useTime } from "@/hooks";
const DataTime = ()=>{
    const {time}:any = useTime();
    return <span className="time">时间：{time}</span>
}

export default DataTime