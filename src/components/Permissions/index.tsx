/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-17 00:27:31
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-17 00:33:58
 * @FilePath: \vite-react\src\components\Permissions\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import React from "react";
import { connect } from "react-redux";

type pageProp = {
  children?: React.ReactNode;
  permissionID?: string;
  permission?: [];
};
const Permissions = ({ children, permissionID, permission }: pageProp) => {
  return <>{permission?.indexOf(permissionID) === -1 ? "" : <>{children}</>}</>;
};
const mapStateToProps = (state: any) => {
  return {
    permission: ["amc_order_view"],
  };
};
export default connect(mapStateToProps)(Permissions);
