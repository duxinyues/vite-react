/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-25 19:56:14
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-12 16:18:33
 * @FilePath: \vite-react\src\App.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import useTheme from "./hooks/useTheme";
import Router from "@/routers/index";
import Auth from "./routers/utils/auth";
function App(props: any) {
  console.log("App props", props);
  const { weakOrGray } = props;
  useTheme(weakOrGray);
  return (
    <BrowserRouter>
      <Auth>
        <Router />
      </Auth>
    </BrowserRouter>
  );
}
const mapStateToProps = (state: any) => {
  return state.global;
};
export default connect(mapStateToProps)(App);
