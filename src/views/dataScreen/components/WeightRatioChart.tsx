/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-02 13:25:03
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 15:51:29
 * @FilePath: \vite-react\src\views\dataScreen\components\WeightRatioChart.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useEcharts } from "@/hooks/useEcharts";
import { EChartsOption } from "echarts";
import "./WeightRatioChart.scss";

interface ChartProp {
  weight1: number;
  weight2: number;
}

const WeightRatioChart = () => {
  let data: ChartProp = {
    weight1: 0.3,
    weight2: 0.7,
  };
  const option: EChartsOption = {
    xAxis: {
      type: "value",
      show: false,
    },
    grid: {
      left: 0,
      top: "30px",
      bottom: 0,
      right: 0,
    },
    yAxis: [
      {
        type: "category",
        position: "left",
        data: ["小于15kg"],
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      {
        type: "category",
        position: "right",
        data: ["大于15kg"],
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          show: false,
          padding: [0, 0, 30, -65],
          fontSize: 12,
          lineHeight: 60,
          color: "rgba(255,255,255,0.6)",
          formatter: "{value}" + data.weight1 * 100 + "%",
          rich: {
            a: {
              color: "transparent",
              lineHeight: 30,
              fontFamily: "digital",
              fontSize: 12,
            },
          },
        },
      },
    ],
    series:[
        {
            type: "bar",
            barWidth: 20,
            data: [data.weight1],
            z: 20,
            itemStyle: {
                borderRadius: 10,
                color: "#007AFE"
            },
            label: {
                show: true,
                color: "#E7E8ED",
                position: "insideLeft",
                offset: [0, -20],
                fontSize: 12,
                formatter: () => {
                    return `小于15kg ${data.weight1 * 100}%`;
                }
            }
        },
        {
            type: "bar",
            barWidth: 20,
            data: [1],
            barGap: "-100%",
            itemStyle: {
                borderRadius: 10,
                color: "#FF4B7A"
            },
            label: {
                show: true,
                color: "#E7E8ED",
                position: "insideRight",
                offset: [0, -20],
                fontSize: 12,
                formatter: () => {
                    return `大于15kg ${data.weight2 * 100}%`;
                }
            }
        }
    ]
  };

  const [echartsRef] = useEcharts(option, data);

  return (
    <div className="weight-main">
      <div className="echarts" ref={echartsRef}></div>
    </div>
  );
};

export default WeightRatioChart;
