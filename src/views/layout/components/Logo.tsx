/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 23:08:27
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 23:24:37
 * @FilePath: \vite-react\src\views\layout\components\Logo.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import logo from "@/assets/vite.svg";
import { connect } from "react-redux";

const Logo = (props:any) => {
  const { isCollapse } = props;
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" />
      {!isCollapse ? <h3>Vite React Admin</h3> : null}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    isCollapse: state.menus.isCollapse,
  };
};
export default connect(mapStateToProps)(Logo);
