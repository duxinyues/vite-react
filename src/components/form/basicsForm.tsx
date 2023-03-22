/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-15 17:32:04
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-17 10:57:45
 * @FilePath: \vite-react\src\components\form\basicsForm.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Form, Button, Space, Divider } from "antd";
import "./index.scss";
import { FormInput, FormPassword } from "./FormItem";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
function BasicsForm() {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    console.log("基础表单", values);
  };
  // 表单错误
  const onFinishFailed = (err: any) => {
    console.log("form failed:", err);
  };
  return (
    <div className="form">
      <Divider>基础表单</Divider>
      <Form
        {...formLayout}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <FormInput
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        />
        <FormPassword
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your username!" }]}
        />
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default BasicsForm;
