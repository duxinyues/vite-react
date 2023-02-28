/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:10:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 00:20:50
 * @FilePath: \vite-react\src\views\layout\components\Theme.tsx
 * @Description: 主题设置
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState, Fragment } from "react";
import { Drawer, Divider, Switch, Button } from "antd";
import { connect } from "react-redux";
import {
  FireFilled,
  SettingOutlined,
  BgColorsOutlined,
  FireOutlined,
} from "@ant-design/icons";
import AdIcon from "@/components/AdIcon";

const Theme = (props: any) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Fragment>
      <AdIcon
        type="icon-pifu"
        className="icon-style"
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="设置"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        width={320}
      >
        <Button type="primary">888</Button>
        {/* 全局主题 */}
        <Divider className="divider">全局主题</Divider>
        <div className="theme-item">
          <span>暗黑模式</span>
        </div>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch onChange={(e) => {}} />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch onChange={(e) => {}} />
        </div>
        <br />
        <Divider className="divider">
          界面设置
        </Divider>
        <div className="theme-item">
          <span>折叠菜单</span>
          <Switch onChange={(e) => {}} />
        </div>
      </Drawer>
    </Fragment>
  );
};
export default connect()(Theme);
