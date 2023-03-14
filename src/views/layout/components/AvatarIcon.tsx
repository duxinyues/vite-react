/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:48:56
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-14 23:17:50
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
  const changeAuth = ()=>{
    navigate("/changeAuth");
  }
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      label: <span className="dropdown-item">权限配置</span>,
      onClick: changeAuth,
    },
    {
      key: "3",
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <Avatar
          size={"large"}
        />
      </Dropdown>
    </>
  );
};

export default AvatarIcon;
