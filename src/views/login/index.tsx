/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 16:27:11
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 16:54:03
 * @FilePath: \vite-react\src\views\login\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import logo from "@/assets/vite.svg";
import loginLeft from "@/assets/login_left.png";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { setToken, setUserInfo } from "@/store/redux/global/action";
import { setAuthButtons, setAuthRouters } from "@/store/redux/auth/action";
import { connect } from "react-redux";
import { useNavigate, useLocation,useHref } from "react-router-dom";
import { loginApi } from "@/api/modules/login";

function Login(props: any) {
  const { setToken, setUserInfo } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish = async (form: any) => {
    try {
      setLoading(true);
      // if (form.username !== "admin" || form.password !== "123456")
      //   return message.error("用户名或者密码错误！");
      const { data } = await loginApi(form);
      setToken(data?.accessToken);
      setUserInfo({ userName: data?.username });
      // 获取用户对应的权限路由和按钮权限
      // setAuthButtons({});
      // setAuthRouters([])
      message.success(data?.message);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };
  const onFinishFailed = (error: any) => {
    console.log("onFinishFailed:", error);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src={loginLeft} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">Vite-React-Admin</span>
          </div>
          <Form
            form={form}
            labelCol={{ span: 5 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="用户名：admin" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password
                autoComplete="new-password"
                placeholder="密码：123456"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item className="login-btn">
              <Button
                onClick={() => {
                  form.resetFields();
                }}
                icon={<CloseCircleOutlined />}
              >
                重置
              </Button>
              <Button
                type="primary"
                loading={loading}
                htmlType="submit"
                icon={<UserOutlined />}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = { setToken, setUserInfo };
export default connect(null, mapDispatchToProps)(Login);
