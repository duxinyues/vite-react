/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 18:08:05
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 01:22:52
 * @FilePath: \vite-react\src\views\layout\waterMarkLayout.jsx
 * @Description: 页面水印
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
// import WaterMark from 'watermark-component-for-react';
import { Watermark } from 'antd';
import { connect } from "react-redux";

function WaterMarkLayout(props) {
    console.log("props", props.waterMark)
    return <Watermark {...props.waterMark} style={{height:"100%"}}>
        {props.children}
    </Watermark>
}
const mapStateToProps = (props) => {

    return { waterMark: props.global.waterMark }
}
export default connect(mapStateToProps)(WaterMarkLayout)