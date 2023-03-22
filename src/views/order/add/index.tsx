/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-17 00:53:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-17 10:23:54
 * @FilePath: \vite-react\src\views\order\add\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState } from "react";
import { Form, Row, Col, Button, Space, Input, Radio } from "antd";
import "./index.scss";
import {
  FormSelect,
  FormInput,
  FormRadio,
  FormTime,
} from "@/components/form/FormItem/SearchFormItem";
import CustomTable from "@/components/Table";
import { connect } from "react-redux";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const payType = [
  { text: "月付", value: 1 },
  { text: "两月付", value: 2 },
  { text: "季付", value: 3 },
  { text: "半年付", value: 4 },
  { text: "年付", value: 5 },
  { text: "一次性结清", value: 6 },
];
function AddOrder() {
  const [selectScheme, setSelectScheme] = useState(false); // 选择商品方案弹窗
  const [plan, setPlan] = useState(); // 商品方案
  const [form] = Form.useForm();
  const columns = [
    {
      title: "商品方案ID",
      dataIndex: "id",
    },
    {
      title: "商品方案名称",
      dataIndex: "",
    },
    {
      title: "新签/续签",
      dataIndex: "",
    },
    {
      title: "车型简称",
      dataIndex: "",
    },
    {
      title: "租赁类型",
      dataIndex: "",
    },
    {
      title: "租期",
      dataIndex: "",
    },
    {
      title: "押金",
      dataIndex: "",
    },
    {
      title: "租金",
      dataIndex: "",
    },
  ];
  const onFinish = async () => {
    let params: any = {};
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };
  const onCancel = () => {
    console.log("取消");
    form.resetFields();
  };
  return (
    <div className="page">
      <Form
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className="lease">
          <p className="title">
            <span>订单基本信息</span>
          </p>
          <Row gutter={24}>
            <Col span={6}>
              <FormSelect
                name="companyId"
                label="所属公司"
                items={[]}
                placeholder="默认带出，根据数据权限来"
                // rules={[{ required: true, message: '请选择所属公司' }]}
              />
            </Col>
            <Col span={6}>
              <FormSelect
                label="商品名称"
                name="lesseeName"
                placeholder="请选择商品名称"
                items={[]}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={6}>
              <FormInput
                name="lesseeName"
                label="客户名称"
                disabled
                placeholder="选择司机名称自动带出"
              />
            </Col>
            <Col span={6}>
              <FormInput
                name="lesseeAddress"
                label="联系地址"
                disabled
                placeholder="联系地址"
              />
            </Col>
            <Col span={6}>
              <FormInput name="lesseeTel" label="联系电话" disabled />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={6} className="channel">
              <FormSelect
                name="channelName"
                className="select"
                label="渠道名称"
                placeholder="请选择渠道名称"
                // rules={[{ required: true, message: '请选择渠道名称' }]}
              />
              <div className="qrCode">渠道二维码</div>
            </Col>
          </Row>
        </div>
        <div className="goods">
          <Col span={12} className="payType">
            <Form.Item
              labelCol={{
                xs: { span: 24 },
                sm: { span: 2 },
              }}
              wrapperCol={{
                xs: { span: 24, offset: 0 },
                sm: { span: 23, offset: 1 },
              }}
              label="付款方式"
              rules={[{ required: true, message: "请选择付款方式" }]}
              name="paymentMethod"
            >
              eeee
            </Form.Item>
          </Col>
          <Row>
            <Col span={6}>
              <FormTime
                labelCol={{
                  xs: { span: 24 },
                  sm: { span: 5 },
                }}
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 19, offset: 1 },
                }}
                name="startTime"
                rules={[{ required: true, message: "请选择订单有效期" }]}
                label="订单有效期"
                placeholder="请选择订单有效期"
              />
            </Col>
            <Col span={6}>
              <Form.Item label="订单结束日">根据订单自动计算</Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Form.Item
                labelCol={{
                  xs: { span: 24 },
                  sm: { span: 3 },
                }}
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 21, offset: 1 },
                }}
                label="付款日"
              >
                按自然月账单生成
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <FormInput
                name="remark"
                labelCol={{
                  xs: { span: 24 },
                  sm: { span: 2 },
                }}
                wrapperCol={{
                  xs: { span: 24, offset: 0 },
                  sm: { span: 22, offset: 1 },
                }}
                label="备注"
                placeholder="请填写下单备注，不超过200个字符"
              />
            </Col>
          </Row>
          <Row className="footerBtn">
            <Space>
              <Button
                shape="round"
                onClick={(e) => {
                  e.stopPropagation();
                  onCancel();
                }}
              >
                取消
              </Button>
              <Button shape="round" type="primary" htmlType="submit">
                提交
              </Button>
            </Space>
          </Row>
        </div>
      </Form>
    </div>
  );
}
export default connect(({ order, global }: any) => ({
  order,
  global,
}))(AddOrder);
