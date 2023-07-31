/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-07-31 00:14:48
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-07-31 00:38:16
 * @FilePath: /vite-react/src/components/Canvas/sign.tsx
 * @Description: canvas签字组件
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import React, { useRef, useEffect, useState, useMemo } from "react";
import "./sign.scss";
import Draw from "@/utils/draw";
function Sign() {
    const [draw, setDraw] = useState<any>()
    useEffect(() => {
        initCanvas()
        return () => {
            // 组件卸载
        }
    }, [])
    const initCanvas = () => {
        const canvas = document.querySelector('canvas');
        const draw = new Draw(canvas, 0, {}, false)
        setDraw(draw)
    }
    return <div className="canvas-container">
        <div id="canvasBox" className="canvasBox">
            <div className="greet">
                <span>请在下面空白处签名：</span>
                <a>
                    重签
                </a>
                {/* <input
          type="button"
          value="生成png图片"
          onClick={() => this.download()}
        /> */}
            </div>
            <canvas />
        </div>
    </div>
}

export default Sign