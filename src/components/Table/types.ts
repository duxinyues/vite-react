/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-16 18:23:50
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-16 18:24:00
 * @FilePath: \vite-react\src\components\Table\types.ts
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

export interface Columns {
  [propName: string]: any;
}

// 页码状态
export interface paginationInitialType {
  current?: number;
  size?: number;
}

// 表格组件Props
export interface ArgTableProps {
  columns: any[];
  total?: any;
  params?: any;
  defaultCurrent?: number;
  noInit?: boolean;
  kid?: any;
  scroll?: any;
  callback: (pagination: paginationInitialType) => void;
  dataSource: any[];
  loading?: boolean;
  pagination?: boolean;
  showRowSelection?: boolean;
  pageSizeOptions?: any[];
  selectCallback?: (key: any, data: any) => void;
  getCheckboxProps?: any;
  type?: string;
  bordered?: boolean;
}

// 表格组件Props
export interface TableProps {
  rowKey?: any;
  scroll?: { x: string };
  className?: string;
  rowSelection?: any;
  columns: any[];
  dataSource: any[];
  loading?: boolean;
}

// 表格初始化状态
export interface initialStateType {
  loading: boolean;
  pagination: paginationInitialType;
  dataSource: Array<any>;
}

// 操作类型
export interface actionType {
  type: string;
  payload?: any;
}
