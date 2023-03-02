/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-02 09:22:51
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 09:26:34
 * @FilePath: \vite-react\src\hooks\index.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import moment from "moment";
import { useEffect, useState, useRef } from "react";
export const useTime = () => {
  const timer: any = useRef(null);
  const [time, setTime] = useState(moment().format("YYYY年MM月DD日 HH:mm:ss"));
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(moment().format("YYYY年MM月DD日 HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [time]);

  return { time };
};
