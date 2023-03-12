/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-02 12:03:36
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 12:16:02
 * @FilePath: \vite-react\src\uitls\echarts.ts
 * @Description: Echarts 按需加载
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import * as echarts from "echarts/core";
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  LegendComponent,
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  GridComponent,
  GridComponentOption,
  //   数据组件
  DatasetComponent,
  DatasetComponentOption,
  //   内置的数据转换器:filter,sort
  TransformComponent,
  TooltipComponent,
  TooltipComponentOption,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

// Echarts的option类型
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | TooltipComponentOption
>;

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  ToolboxComponent,
]);
export default echarts;
