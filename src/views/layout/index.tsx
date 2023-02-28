/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:53:32
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 20:20:58
 * @FilePath: \vite-react\src\views\layout\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import WaterMarkLayout from "./waterMarkLayout";
import "./index.scss";
import { connect } from "react-redux";

const { Content, Footer, Sider } = Layout;

function Container(props: any) {
  const navigate = useNavigate();
  const onChangeRouter = (router: string) => {
    navigate(router);
  };
  const items: MenuProps["items"] = props.menus.map(
    (item: any, index: number) => {
      if (item.children) {
        return {
          key: item.key,
          label: item.title,
          children: item.children.map((items: any, key: number) => {
            return {
              key: items.router,
              label: items.title,
              kaypath: items.router,
            };
          }),
        };
      }
      return {
        key: item.router,
        label: item.title,
        kaypath: item.router,
      };
    }
  );
  return (
    <WaterMarkLayout>
    <Layout className="layout">
      <Layout>
        <Sider className="sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["0"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={({ key }) => onChangeRouter(key)}
          />
        </Sider>
        <Content className="content">
          <Outlet />
          <Footer style={{ textAlign: "center" }}>
            React 实例 {new Date().getFullYear()}
          </Footer>
        </Content>
      </Layout>
    </Layout>
    </WaterMarkLayout>
  );
}

const mapStateToProps = (state: any) => {
  return { menus: state.menus };
};

export default connect(mapStateToProps)(Container);
