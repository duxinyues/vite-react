/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:48:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 17:55:12
 * @FilePath: \vite-react\src\views\layout\components\AvatarIcon.tsx
 * @Description: 用户头像
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Avatar, Modal, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

interface ModalProps {
  showModal: (params: any) => void;
}

const AvatarIcon = () => {
  const navigate = useNavigate();
  const logout = () => {
    Modal.confirm({
      title: "温馨提示！",
      content: "是否确认退出登录？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        navigate("/login");
        localStorage.clear();
      },
    });
  };
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
        <Avatar
          size={"large"}
          src="https://profile-avatar.csdnimg.cn/068bb7948d2941d584efb796a79bb704_xuelian3015.jpg!1"
        />
      </Dropdown>
    </>
  );
};

export default AvatarIcon;
