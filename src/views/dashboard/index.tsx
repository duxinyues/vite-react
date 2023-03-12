/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 18:08:07
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 09:15:45
 * @FilePath: \vite-react\src\views\dashboard\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState, useEffect, useRef } from "react";
import Echarts from "@/components/HocEcharts";
import "./index.scss";
import { createArray } from "@/utils";
import AreaEcharts from "@/components/AreaEcharts";
export default function Dashboard() {
  const refreshRef = useRef(false);
  const [theme] = useState("roma");
  const [option1, setOption1] = useState({
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
      data: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
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
      data: createArray(10, 1000, 8),
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
  });
  const option2 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setOption1({
        ...option1,
        series: {
          ...option1.series,
          data: createArray(300, 900, 8),
        },
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [option1.series.data]);
  return (
    <>
      <div className="row">
        <Echarts
          refresh={refreshRef.current}
          option={option1}
          theme={theme}
          wrapStyle={{
            height: "200px",
            width: "400px",
            background: "#fff",
          }}
        />
        <AreaEcharts />
        <Echarts
          option={option2}
          theme={theme}
          wrapStyle={{
            height: "200px",
            width: "400px",
            background: "#fff",
          }}
        />
        <Echarts
          option={{
            legend: {
              top: "bottom",
            },
            // toolbox: {
            //   show: true,
            //   feature: {
            //     mark: { show: true },
            //     dataView: { show: true, readOnly: false },
            //     restore: { show: true },
            //     saveAsImage: { show: true },
            //   },
            // },
            series: [
              {
                name: "Nightingale Chart",
                type: "pie",
                radius: [25, 100],
                center: ["50%", "50%"],
                roseType: "area",
                itemStyle: {
                  borderRadius: 8,
                },
                data: [
                  { value: 40, name: "rose 1" },
                  { value: 38, name: "rose 2" },
                  { value: 32, name: "rose 3" },
                  { value: 30, name: "rose 4" },
                  { value: 28, name: "rose 5" },
                  { value: 26, name: "rose 6" },
                  { value: 22, name: "rose 7" },
                  { value: 18, name: "rose 8" },
                ],
              },
            ],
          }}
          theme={theme}
          wrapStyle={{
            height: "200px",
            width: "400px",
            background: "#fff",
          }}
        />
      </div>
      <div className="row">
      </div>
    </>
  );
}
