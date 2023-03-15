/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 18:08:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 17:14:54
 * @FilePath: \vite-react\src\views\layout\waterMarkLayout.jsx
 * @Description: 页面水印
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import WaterMark from 'watermark-component-for-react';
import { connect } from "react-redux"

function WaterMarkLayout(props) {
    const { content, fontSize, color, rotate, zIndex, width, height } = props;
    console.log("props.waterMark", props)
    return <WaterMark
        style={{ height: "88vh" }}
        fillStyle="black"
        content="读心悦"
        font="20px  Microsoft Yahei"
        rotate="-90"
        zIndex={zIndex}
        width={200}
        height={200}
        globalAlpha={0.3}
    >
        {props.children}
    </WaterMark>
}
const mapStateToProps = (state) => {

    return { ...state.global.waterMark }
}
export default connect(mapStateToProps)(WaterMarkLayout);