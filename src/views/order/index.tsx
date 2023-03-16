import { memo, useState } from "react";
import AdvancedSearchFrom from "@/components/form/advancedSearchFrom";
import AdvancedTables from "@/components/Table";
import type { ColumnsType } from "antd/es/table";
import "./index.scss";
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
const OrderList = memo(() => {
  const [list, setList] = useState<any[]>([]);
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
  const orderColumns: ColumnsType<TargetAPI.TargetColumns> = [
    {
      title: "订单编号",
      dataIndex: "orderCarNo",
      align: "center",
    },
    {
      title: "订单状态",
      dataIndex: "orderCarStatus",
      align: "center",
      // render: (params) => renderStatus(params),
    },
    {
      title: "下单方式",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "业务类型",
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
      title: "车牌号",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "司机名称",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "所属公司",
      dataIndex: "order",
      align: "center",
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      align: "center",
    },
    {
      title: "租赁开始日",
      dataIndex: "applyDeptid",
      align: "center",
    },
    {
      title: "租赁结束日",
      dataIndex: "applyDeptname",
      align: "center",
    },
    {
      title: "租期",
      dataIndex: "tenancy",
      align: "center",
    },
    {
      title: "交车时间",
      dataIndex: "deliveryTime",
      align: "center",
    },
    {
      title: "非滴滴司机ID",
      dataIndex: "platformDriverNo",
      align: "center",
    },
    {
      title: "操作",
      dataIndex: "action",
      align: "center",
      // render: (id, record) => renderTagBtn(record),
    },
  ];
  return (
    <div className="page">
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
}, []);

export default OrderList;
