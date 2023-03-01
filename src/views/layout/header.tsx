/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 20:43:11
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 16:17:49
 * @FilePath: \vite-react\src\views\layout\header.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Layout, Space } from "antd";
import CollapsesIcon from "./components/CollapsesIcon";
import Theme from "./components/Theme";
import FullScreen from "./components/Fullscreen";
import AvatarIcon from "./components/AvatarIcon";
import "./header.modules.scss";

function AdHeader(props: any) {
  return (
    <Layout.Header>
      <div className="header-lf">
        <CollapsesIcon />
      </div>
      <div className="header-ri">
        <Space>
          <FullScreen />
          <Theme />
          <span className="username">读心悦</span>
          <AvatarIcon />
        </Space>
      </div>
    </Layout.Header>
  );
}

export default AdHeader;
