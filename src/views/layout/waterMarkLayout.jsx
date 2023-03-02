/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 18:08:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-02 12:30:34
 * @FilePath: \vite-react\src\views\layout\waterMarkLayout.jsx
 * @Description: 页面水印
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import WaterMark from 'watermark-component-for-react';

function WaterMarkLayout(props) {
    return <WaterMark
        style={{ height: "100vh" }}
        content={"Vite React Admin"}
        width="460px"
        height="300px"
        font="20px Microsoft Yahei"
    >
        {props.children}
    </WaterMark>
}

export default WaterMarkLayout