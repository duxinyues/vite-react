/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:10:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 17:25:12
 * @FilePath: \vite-react\src\views\layout\components\Theme.tsx
 * @Description: 主题设置
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState, Fragment, useMemo, useEffect } from "react";
import {
  Drawer,
  Divider,
  Switch,
  Form,
  Input,
  Slider,
  Space,
  InputNumber,
  Popover,
  Typography,
} from "antd";
import { connect } from "react-redux";
import {
  setDark,
  setWeakOrGray,
  setFooter,
  setWaterMark,
} from "@/store/redux/global/action";
import { changeCollapse } from "@/store/redux/menu/action";
import AdIcon from "@/components/AdIcon";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  value?: string;
  onChange?: (value: string) => void;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ value, onChange }) => {
  const switchStyle = {
    padding: 4,
    background: "#fff",
    borderRadius: 2,
    border: "1px solid #dedede",
    display: "inline-block",
    cursor: "pointer",
  };

  const colorStyle = {
    width: 36,
    height: 14,
    borderRadius: 2,
    background: value || "",
  };

  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      overlayInnerStyle={{ padding: 0 }}
      content={
        <SketchPicker
          color={value}
          onChange={(color) => {
            console.log("color", color);
            return onChange?.(color.hex);
          }}
        />
      }
    >
      <div style={switchStyle}>
        <div style={colorStyle} />
      </div>
    </Popover>
  );
};
const Theme = (props: any) => {
  const {
    isDark,
    setDark,
    isCollapse,
    changeCollapse,
    weakOrGray,
    setWeakOrGray,
    footer,
    setFooter,
  } = props;
  
  const [visible, setVisible] = useState<boolean>(false);
 
  return (
    <Fragment>
      <AdIcon
        type="icon-pifu"
        className="icon-style"
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="设置"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        width={320}
      >
        {/* 全局主题 */}
        <Divider className="divider">全局主题</Divider>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch
            checked={weakOrGray === "gray"}
            onChange={(e) => setWeakOrGray(e, "gray")}
          />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch
            checked={weakOrGray === "weak"}
            onChange={(e) => setWeakOrGray(e, "weak")}
          />
        </div>
        <Divider className="divider">界面设置</Divider>
        <div className="theme-item">
          <span>折叠菜单</span>
          <Switch checked={isCollapse} onChange={(e) => changeCollapse(e)} />
        </div>
        <div className="theme-item">
          <span>页脚</span>
          <Switch checked={footer} onChange={(e) => setFooter(e)} />
        </div>
      </Drawer>
    </Fragment>
  );
};
const mapStateToProps = (state: any) => {
  return {
    ...state.global,
    isCollapse: state.menus.isCollapse,
  };
};
const mapDispatchToProps = {
  setDark,
  changeCollapse,
  setWeakOrGray,
  setFooter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
