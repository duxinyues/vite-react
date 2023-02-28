/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:30:25
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-02-28 23:46:50
 * @FilePath: \vite-react\src\views\layout\components\Fullscreen.tsx
 * @Description: 全屏设置
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import screenfull from "screenfull";
import { message } from "antd";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

const Fullscreen = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(
    screenfull.isFullscreen
  );
  useEffect(() => {
    screenfull.on("change", () => {
      if (screenfull.isFullscreen) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }

      return () => screenfull.off("change", () => {});
    });
  }, []);

  const handlerFullScreen = () => {
    if (!screenfull.isEnabled) message.warning("您的浏览器不支持全屏");
    screenfull.toggle();
  };
  return fullScreen ? (
    <FullscreenExitOutlined
      className="icon-style"
      onClick={handlerFullScreen}
    />
  ) : (
    <FullscreenOutlined onClick={handlerFullScreen} className="icon-style" />
  );
};

export default Fullscreen;
