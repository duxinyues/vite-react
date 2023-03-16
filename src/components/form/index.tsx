/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-06 15:37:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 21:44:48
 * @FilePath: \vite-react\src\components\form\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Divider } from "antd";
import BasicsForm from "./basicsForm";
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


function Form() {
  return (
    <div className="component-content">
      <Divider>基础表单</Divider>
      <BasicsForm
        formLayout={formLayout}
        style={{ maxWidth: 600, margin: "0 auto" }}
        formData={[
          {
            type: "input",
            label: "用户名",
            name: "username",
            rules: [{ required: true, message: "请输入用户名!" }],
          },
          {
            type: "input",
            label: "密码",
            name: "password",
            rules: [{ required: true, message: "请输入密码!" }],
          },
        ]}
      />
    </div>
  );
}

export default Form;
