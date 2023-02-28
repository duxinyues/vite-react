/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:48:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 22:06:09
 * @FilePath: \vite-react\src\views\layout\components\AvatarIcon.tsx
 * @Description: 用户头像
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useRef } from "react";
import { connect } from "react-redux";
import { Avatar, Modal, Menu, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

interface ModalProps {
  showModal: (params: any) => void;
}

const AvatarIcon = () => {
  const navigate = useNavigate();
  const logout = () => {};
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      label: <span className="dropdown-item">个人信息</span>,
      onClick: () => {},
    },
    {
      key: "3",
      label: <span className="dropdown-item">修改密码</span>,
      onClick: () => {},
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
       <Avatar size={"large"} src="https://avatars.githubusercontent.com/u/29058884?v=4" />
      </Dropdown>
    </>
  );
};

export default AvatarIcon;
