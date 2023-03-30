/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-27 13:36:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-27 14:40:45
 * @FilePath: \vite-react\src\components\form\searchForm.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Form, Button, Space, Divider, Row, Col, Input } from "antd";
import "./index.scss";
import { FormInput, FormSelect } from "./FormItem";
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const formLayout = {
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "1" },
};
function SearchForm() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("表单字段：", values);
  };
  const onFinishFailed = (err: any) => {
    console.log("表单报错：", err);
  };
  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col span="6">
            <FormInput
              label="客户ID"
              name="customerId"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            />
          </Col>
          <Col span="6">
            <FormSelect
              label="证件类型"
              name="idCard-type"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              items={[
                { value: "IDCard", label: "身份证" },
                { value: "passport", label: "护照" },
              ]}
            />
          </Col>
          <Col span="6">
            <Form.Item
              label="证件号"
              name="idCard-number"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span="6">
            <Form.Item {...tailLayout}>
              <Space>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button htmlType="button">重置</Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default SearchForm;
