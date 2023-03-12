/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 22:46:32
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-05 22:54:59
 * @FilePath: \vite-react\src\views\echarts\BarChart.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useEcharts } from "@/hooks/useEcharts";
import { createArray } from "@/utils";

function BarChart() {
  const data: any = createArray(10, 1000, 15);
  const option = {
    tooltip: {
      show: true,
    },

    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["2008","2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016","2017","2018","2019","2020","2021","2022"],
      axisLine: { show: false },
      axisLabel: {
        formatter: () => "",
      },
      splitTitle: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      show: false,
      type: "value",
      axisLine: { show: false },
      axisLabel: {
        formatter: () => "",
      },
      splitTitle: { show: false },
      axisTick: { show: false },
    },
    series: {
      data: data,
      name: "产量",
      type: "bar",
      itemStyle: {
        color: "red",
      },
      barWidth: 10,
      showBackground: false,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
      }, // 柱状图背景
    },
  };
  const [echartsRef] = useEcharts(option, data);
  return (
    <div
      ref={echartsRef}
      className="card content-box"
      style={{ width: "98%", height: "90%" }}
    ></div>
  );
}

export default BarChart;
