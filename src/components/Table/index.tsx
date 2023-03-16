/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-16 16:53:48
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-16 18:31:39
 * @FilePath: \vite-react\src\components\Table\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import { ArgTableProps, TableProps } from "./types";
import "./index.scss";
const AdvancedTables: React.FC<ArgTableProps> = (props: ArgTableProps) => {
  const {
    columns,
    total,
    pagination,
    params,
    callback,
    kid = "id",
    dataSource,
    loading,
    scroll,
    showRowSelection,
    pageSizeOptions,
    selectCallback,
    getCheckboxProps,
    type = "checkbox",
    bordered = true,
  } = props;
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // 改变页码
  function handleTableChange(current: number, size: number) {
    callback({
      current,
      size,
    });
  }
  const onSelectChange = (
    newSelectedRowKeys: React.Key[],
    selectedRows: any[]
  ) => {
    setSelectedRowKeys(newSelectedRowKeys);
    if (showRowSelection) {
      selectCallback?.(newSelectedRowKeys, selectedRows);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    type,
    onChange: onSelectChange,
  };
  useEffect(() => {}, []);
  const data: TableProps = {
    rowKey: (record: any) => record[kid],
    scroll: scroll ? scroll : { x: "max-content" },
    className: "table",
    columns,
    dataSource,
    loading,
  };
  if (showRowSelection) {
    data.rowSelection = getCheckboxProps
      ? { ...rowSelection, ...getCheckboxProps }
      : rowSelection;
  }
  return (
    <>
      <Table {...data} bordered={bordered} pagination={false}></Table>
      {pagination ? (
        <Pagination
          className="pagination"
          defaultCurrent={1}
          current={params.current}
          total={total}
          // eslint-disable-next-line no-shadow
          showTotal={(total, range) =>
            `第  ${range[0]} - ${range[1]} 条 / 总共 ${total} 条`
          }
          showSizeChanger
          showQuickJumper
          pageSizeOptions={pageSizeOptions}
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleTableChange}
        />
      ) : null}
    </>
  );
};

export default AdvancedTables;
