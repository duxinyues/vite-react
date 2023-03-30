/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-06 15:37:06
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-27 13:41:00
 * @FilePath: \vite-react\src\components\form\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Divider } from "antd";
import BasicsForm from "./basicsForm";
import SearchForm from "./searchForm";

function Form() {
  return (
    <div className="component-content">
      <BasicsForm />
      <Divider />
      <SearchForm />
    </div>
  );
}

export default Form;
