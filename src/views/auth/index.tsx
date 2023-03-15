/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-12 17:48:37
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 00:39:49
 * @FilePath: \vite-react\src\views\auth\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState } from "react";
import { Tree, Avatar, Segmented, Space,Divider } from "antd";
import { connect } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import "./index.scss";

interface Props {
  menus: any[];
}
function ChangeAuth(props: Props) {
  console.log("props", props);
  const { menus } = props;
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue:any) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };
  return (
    <div className="auth-container">
      <h2>用户权限</h2>
      <Divider />
      <Tree
        checkable
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={menus}
      />
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return { menus: state.menus.menuState };
};
export default connect(mapStateToProps)(ChangeAuth);
