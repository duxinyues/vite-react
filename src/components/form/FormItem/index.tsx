/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-06 14:56:28
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-06 15:35:20
 * @FilePath: \vite-react\src\components\form\FormItem\index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import {
  Form,
  Input,
  Select,
  DatePicker,
  Radio,
  Switch,
  TreeSelect,
  InputNumber,
  Checkbox,
  Row,
  Col,
  TimePicker,
  Button,
  Upload,
  Cascader,
} from "antd";
import type { Moment } from "moment";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

/**
 * 表单输入input
 * @param props
 * @returns
 */
export function FormInput(props: any) {
  const {
    disabled,
    placeholder,
    onChange,
    addonAfter,
    suffix,
    style,
    ...formProps
  } = props;
  return (
    <Form.Item {...formProps}>
      <Input
        allowClear
        disabled={disabled}
        placeholder={placeholder || "请输入"}
        addonAfter={addonAfter}
        onChange={onChange}
        suffix={suffix}
        style={style}
      />
    </Form.Item>
  );
}

/**
 * 范围输入
 * @param props
 * @returns
 */
export function RangeFormInput(props: any) {
  const {
    disabled,
    placeholder,
    onChange,
    addonAfter,
    suffix,
    text,
    name,
    ...formProps
  } = props;
  return (
    <Input.Group>
      <Row gutter={8} justify="space-around" align="middle">
        <Col span={14}>
          <Form.Item {...formProps} name={name[0]}>
            <Input
              allowClear
              disabled={disabled}
              placeholder={placeholder || "请输入"}
              addonAfter={addonAfter}
              onChange={onChange}
              suffix={suffix}
            />
          </Form.Item>
        </Col>
        <Col span={2} flex="auto">
          {text}
        </Col>
        <Col span={8}>
          <Form.Item name={name[1]}>
            <Input
              allowClear
              disabled={disabled}
              placeholder={placeholder || "请输入"}
              addonAfter={addonAfter}
              onChange={onChange}
              suffix={suffix}
            />
          </Form.Item>
        </Col>
      </Row>
    </Input.Group>
  );
}
