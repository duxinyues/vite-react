/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-02-28 21:10:09
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-15 01:50:17
 * @FilePath: \vite-react\src\views\layout\components\Theme.tsx
 * @Description: 主题设置
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { useState, Fragment, useMemo } from "react";
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
import type { RGBColor } from "react-color";

const { Paragraph } = Typography;

interface ColorPickerProps {
  value?: RGBColor;
  onChange?: (value: RGBColor) => void;
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
    background: `rgba(${value?.r}, ${value?.g}, ${value?.b}, ${value?.a})`,
  };

  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      overlayInnerStyle={{ padding: 0 }}
      content={
        <SketchPicker
          color={value}
          onChange={(color) => onChange?.(color.rgb)}
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
  console.log("props", props);
  const {
    isDark,
    setDark,
    isCollapse,
    changeCollapse,
    weakOrGray,
    setWeakOrGray,
    footer,
    setFooter,
    waterMark: {
      content,
      font: { color, fontSize },
      zIndex,
      rotate,
      gap,
      offset,
    },
  } = props;
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: content,
    color: color,
    fontSize: fontSize,
    zIndex: zIndex,
    rotate: rotate,
    gap: gap,
    offset: offset,
  });
  const watermarkProps = useMemo(() => {
    const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
    setWaterMark({
      content: content,
      font: {
        color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    });
  }, [config]);

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
        <Divider className="divider">水印设置</Divider>
        <div className="theme-item">
          <Form
            style={{
              width: 230,
              flexShrink: 0,
              paddingLeft: 20,
              marginLeft: 20,
            }}
            form={form}
            layout="vertical"
            initialValues={config}
            onValuesChange={(_, values) => {
              setConfig(values);
            }}
          >
            <Form.Item name="content" label="水印文案">
              <Input
                placeholder="请输入"
                onChange={({ target: { value } }) => {
                  console.log("文案", value);
                  setWaterMark({
                    content: value,
                    font: {
                      color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                      fontSize,
                    },
                    zIndex,
                    rotate,
                    gap,
                    offset,
                  })
                }}
              />
            </Form.Item>
            <Form.Item name="color" label="颜色">
              <ColorPicker />
            </Form.Item>
            <Form.Item name="fontSize" label="大小">
              <Slider step={1} min={0} max={100} />
            </Form.Item>
            <Form.Item name="zIndex" label="zIndex">
              <Slider step={1} min={0} max={100} />
            </Form.Item>
            <Form.Item name="rotate" label="旋转">
              <Slider step={1} min={-180} max={180} />
            </Form.Item>
            <Form.Item label="Gap" style={{ marginBottom: 0 }}>
              <Space style={{ display: "flex" }} align="baseline">
                <Form.Item name={["gap", 0]}>
                  <InputNumber placeholder="gapX" style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item name={["gap", 1]}>
                  <InputNumber placeholder="gapY" style={{ width: "100%" }} />
                </Form.Item>
              </Space>
            </Form.Item>
            <Form.Item label="Offset" style={{ marginBottom: 0 }}>
              <Space style={{ display: "flex" }} align="baseline">
                <Form.Item name={["offset", 0]}>
                  <InputNumber
                    placeholder="offsetLeft"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item name={["offset", 1]}>
                  <InputNumber
                    placeholder="offsetTop"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Space>
            </Form.Item>
          </Form>
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
  setWaterMark,
};
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
