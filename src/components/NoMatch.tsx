/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-01 22:54:01
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-01 22:54:11
 * @FilePath: \vite-react\src\components\NoMatch.tsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { Result, Button } from 'antd';
import { Link } from "react-router-dom"
function NoMatch() {
  return (
    <Result
      status="warning"
      title="Nothing to see here!"
      extra={
        <Button type="primary" key="console">
          <Link to="/">返回</Link>
        </Button>
      }
    />);
}

export default NoMatch