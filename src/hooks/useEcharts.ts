/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 18:49:47
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 18:58:46
 * @FilePath: \vite-react\src\hooks\useEcharts.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import {  useEffect, useRef } from "react";
import * as echarts from "echarts";
export const useEcharts = (options: echarts.EChartsCoreOption, data?: any) => {
  const charts = useRef<echarts.EChartsType>();
  const echartsRef = useRef<HTMLDivElement>(null);

  const echartsResize = () => {
    echartsRef && charts?.current?.resize();
  };
  useEffect(() => {
    if (data?.length !== 0) {
      charts?.current?.setOption(options);
    }
  }, [data]);
  useEffect(() => {
    if (echartsRef?.current) {
      charts.current = echarts.init(echartsRef.current as HTMLDivElement);
    }
    charts?.current?.setOption(options);
    window.addEventListener("resize", echartsResize, false);

    return () => {
      window.removeEventListener("resize", echartsResize);
      charts?.current?.dispose();
    };
  }, []);
  return [echartsRef];
};
