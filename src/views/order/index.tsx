/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-16 17:18:50
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-17 01:25:47
 * @FilePath: \vite-react\src\views\order\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { memo, useState } from "react";
import AdvancedSearchFrom from "@/components/form/advancedSearchFrom";
import AdvancedTables from "@/components/Table";
import Permissions from "@/components/Permissions";
import type { ColumnsType } from "antd/es/table";
import { Button, Space } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "1" },
};
interface SearchOrderParam {
  current?: number; // 当前页
  size?: number; // 每页数量
  orderCarNo?: string; // 订单编号
  orderCarStatus?: string; // 订单状态
  lesseeName?: string; // 司机名称
  rentType?: string; // 订单类型 ???? 命名应该错误
  businessType?: string; // 业务类型
  orderWay?: string; // 下单方式
  planType?: string; // 方案类型（字典：新签/续租）
  startTimeStart?: string; // 租赁开始日
  finishTimeStart?: string; // 租赁结束日
  deliveryTimeStart?: string; // 交车时间
}
const defaultList = [
  { id: 12, orderCarNo: "29873485734", orderCarStatus: "待支付" },
];
const OrderList = memo(() => {
  const navigate = useNavigate();
  const [list, setList] = useState<any[]>(defaultList);
  const [total, setTotal] = useState(0);
  const [paginationParams, setPaginationParams] = useState({
    size: 10,
    current: 1,
  });
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    console.log("values", values);
  };
  const onReset = () => {};
  // 搜索字段参数
  const formData: any[] = [
    {
      type: "group",
      key: "group1",
      groupItems: [
        {
          type: "input",
          label: "订单编号",
          name: "orderCarNo",
          key: "orderCarNo",
          placeholder: "请输入订单编号",
        },
        {
          type: "select",
          key: "orderCarStatus",
          name: "orderCarStatus",
          placeholder: "请选择订单状态",
          label: "订单状态",
          keys: "dictKey",
          title: "dictValue",
          items: [], //设置对应的订单类型，
        },
        {
          type: "input",
          label: "商品名称",
          name: "lesseeName",
          key: "lesseeName",
          placeholder: "请输入商品名称",
        },
        {
          type: "select",
          key: "rentType",
          name: "rentType",
          placeholder: "请选择订单类型",
          label: "订单类型",
          keys: "dictKey",
          title: "dictValue",
          items: [],
        },
      ],
    },
    {
      type: "group",
      key: "group2",
      groupItems: [
        {
          type: "select",
          key: "businessType",
          name: "businessType",
          label: "业务类型",
          placeholder: "请选择业务类型",
          keys: "dictKey",
          title: "dictValue",
          items: [],
        },
        {
          type: "select",
          key: "orderWay",
          name: "orderWay",
          label: "下单方式",
          placeholder: "请选择下单方式",
          keys: "dictKey",
          title: "dictValue",
          items: [],
          span: 6,
        },
        {
          type: "select",
          key: "planType",
          name: "planType",
          label: "新签/续租",
          placeholder: "请选择新签/续租",
          keys: "dictKey",
          title: "dictValue",
          items: [],
          span: 6,
        },
        {},
      ],
    },
  ];
  const btnList = [
    {
      text: "新增订单",
      type: "primary",
      id: "amc_order_add",
      onClick: () => {
        navigate("/addOrder");
      },
    },
  ];
  const renderTagBtn = (record: any) => (
    <div>
      <Permissions permissionID="amc_order_view">
        <Button size="small" type="link">
          查看
        </Button>
      </Permissions>

      <Permissions permissionID="amc_order_cancel">
        <Button size="small" type="link">
          取消
        </Button>
      </Permissions>

      <Permissions permissionID="amc_order_del">
        <Button size="small" type="link">
          删除
        </Button>
      </Permissions>
    </div>
  );
  const orderColumns: ColumnsType = [
    {
      title: "订单编号",
      dataIndex: "orderCarNo",
      align: "center",
    },
    {
      title: "订单状态",
      dataIndex: "orderCarStatus",
      align: "center",
    },
    {
      title: "下单方式",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "订单类型",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "新签/续租",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "商品名称",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      align: "center",
    },
    {
      title: "操作",
      dataIndex: "action",
      align: "center",
      render: (id, record) => renderTagBtn(record),
    },
  ];
  const renderBtn = () => {
    return (
      <Space size={12}>
        {btnList.map((item: any, index: number) => (
          <Permissions permissionID={item.id}>
            <Button {...item} key={index}>
              {item.text}
            </Button>
          </Permissions>
        ))}
      </Space>
    );
  };
  return (
    <div className="page" style={{ background: "#fff" }}>
      <div className="search">
        <AdvancedSearchFrom
          searchBtnText="查询"
          onFinish={onFinish}
          onReset={onReset}
          formItems={formData}
          formLayout={formItemLayout}
          rows={2}
        />
      </div>
      <div className="btnList">{renderBtn()}</div>
      <div className="orderList">
        <AdvancedTables
          params={paginationParams}
          columns={orderColumns}
          pagination
          total={total}
          callback={(pagination: any) => {
            setPaginationParams(pagination);
          }}
          loading={loading}
          dataSource={list}
        />
      </div>
    </div>
  );
});

export default OrderList;
