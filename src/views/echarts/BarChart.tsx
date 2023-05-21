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
function getArrByKey(data: any[], k: string) {
  let key = k || "value";
  let res: any[] = [];
  if (data) {
    data.forEach(function (t) {
      res.push(t[key]);
    });
  }
  return res;
};
function BarChart() {
  let exempleData = [
    { name: '2015', value: 32 }, { name: '2016', value: 45 },
    { name: '2017', value: 1 }, { name: '2018', value: 47 },
    { name: '2019', value: 53 }, { name: '2020', value: 65 },
    { name: '2021', value: 37 },
  ];
  const xLabel = getArrByKey(exempleData, "name");
  const seriesData = getArrByKey(exempleData, "value")
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      // feature: {
      //   mark: { show: true },
      //   dataView: { show: true, readOnly: false },
      //   magicType: { show: true, type: ['line', 'bar', 'stack'] },
      //   restore: { show: true },
      //   saveAsImage: { show: true }
      // }
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xLabel,
      // axisLine: { show: false },
      // axisLabel: {
      //   formatter: () => "",
      // },
      splitTitle: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      // show: false,
      type: "value",
      axisLine: { show: false },
      axisLabel: {
        formatter: (data: any) => {
          console.log("Ylabel", data)
          return data + "%"
        },
      },
      min: 0,
      max: 100,
      splitTitle: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: seriesData,
        name: "产量",
        type: "bar",
        itemStyle: {
          color: "red",
        },
        // barWidth: 10,
        showBackground: false,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        }, // 柱状图背景
      },
      {
        data: seriesData,
        name: "产量",
        type: "bar",
        itemStyle: {
          color: "green",
        },
        // barWidth: 10,
        showBackground: false,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        }, // 柱状图背景
      }
    ],
  };
  const [echartsRef] = useEcharts(option, exempleData);
  return (
    <div ref= { echartsRef } className = "card content-box"
  style = {{ width: "98%", height: "90%" }
}
    > </div>
  );
}

export default BarChart;
