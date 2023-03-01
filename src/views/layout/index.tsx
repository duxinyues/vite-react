/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-27 17:53:32
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 16:11:51
 * @FilePath: \vite-react\src\views\layout\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import WaterMarkLayout from "./waterMarkLayout";
import AdHeader from "./header";
import Logo from "./components/Logo";
import "./index.scss";
import { connect } from "react-redux";

const { Content, Footer, Sider } = Layout;

function Container(props: any) {
  const { footer, isCollapse, token } = props;
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
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout className="layout">
      <Layout>
        <Sider className="sider" collapsed={isCollapse} theme="dark">
          <Logo />
          <Menu
            mode="inline"
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["0"]}
            style={{ height: "calc(100% - 60px)", borderRight: 0 }}
            items={items}
            onClick={({ key }) => onChangeRouter(key)}
          />
        </Sider>
        <Content className="content">
          <AdHeader />
          <WaterMarkLayout>
            <Outlet />
          </WaterMarkLayout>
          {footer && (
            <Footer style={{ textAlign: "center" }}>
              React 实例 {new Date().getFullYear()}
            </Footer>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state: any) => {
  const { menuState, isCollapse } = state.menus;
  const { footer, token } = state.global;
  return { menus: menuState, isCollapse, footer, token };
};

export default connect(mapStateToProps)(Container);
