/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 20:55:12
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 23:02:56
 * @FilePath: \vite-react\src\views\layout\components\CollapsesIcon.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { changeCollapse } from "@/store/redux/menu/action";

const CollapsesIcon = (props: any) => {
  const { isCollapses, changeCollapse } = props;
  console.log("收缩", isCollapses);
  return (
    <div
      className="collapsed"
      onClick={() => {
        console.log("点击");
        changeCollapse(!isCollapses)
      }}
    >
      {isCollapses ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return { isCollapses: state.menus.isCollapse };
};
const mapDispatchToProps = { changeCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapsesIcon);
