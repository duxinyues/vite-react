/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable complexity */
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Space } from "antd";
import type { FormInstance } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  FormInput,
  RangeFormInput,
  FormPassword,
  FormSelect,
  FormTreeSelect,
  FormTime,
  FormTimeRange,
  FormTextArea,
  FormRadio,
  FormSwitch,
  FormCustom,
  FormUpload,
  FormInputNumber,
  FormCheckbox,
  FormDateRange,
  FormButton,
  FormCascader,
  FormInputSearch,
} from "./SearchFormItem";
import "../index.scss";

const renderFormItems = (formItems: any[], formDisabled: boolean) =>
  formItems.map((formItem) => {
    const { type, key, groupItems, cls, span, flex, ...currentProps } =
      formItem;
    currentProps.disabled = currentProps.disabled
      ? currentProps.disabled
      : formDisabled;
    switch (type) {
      case "input":
        return <FormInput {...(currentProps as any)} key={key} />;
      case "rangeInput":
        return <RangeFormInput {...(currentProps as any)} key={key} />;
      case "search":
        return <FormInputSearch {...(currentProps as any)} key={key} />;
      case "inputNumber":
        return <FormInputNumber {...(currentProps as any)} key={key} />;
      case "password":
        return <FormPassword {...(currentProps as any)} key={key} />;
      case "select":
        return <FormSelect {...(currentProps as any)} key={key} />;
      case "cascader":
        return <FormCascader {...(currentProps as any)} key={key} />;
      case "treeSelect":
        return <FormTreeSelect {...(currentProps as any)} key={key} />;
      case "time":
        return <FormTime {...(currentProps as any)} key={key} />;
      case "timeRange":
        return <FormTimeRange {...(currentProps as any)} key={key} />;
      case "dateRange":
        return <FormDateRange {...(currentProps as any)} key={key} />;
      case "textArea":
        return <FormTextArea {...(currentProps as any)} key={key} />;
      case "radio":
        return <FormRadio {...(currentProps as any)} key={key} />;
      case "switch":
        return <FormSwitch {...(currentProps as any)} key={key} />;
      case "custom":
        return <FormCustom {...(currentProps as any)} key={key} />;
      case "upload":
        return <FormUpload {...(currentProps as any)} key={key} />;
      case "checkbox":
        return <FormCheckbox {...(currentProps as any)} key={key} />;
      case "button":
        return <FormButton {...(currentProps as any)} key={key} />;
      case "group": {
        const colW = 24 / (groupItems ? groupItems.length : 1);
        return (
          <Row
            className={cls}
            gutter={
              typeof formItem.gutter === "undefined" ? 10 : formItem.gutter
            }
            key={key}
          >
            {groupItems?.map((item: any) => {
              const wInfo: {
                span?: number | string;
                flex?: number | "none" | "auto" | string;
                push?: number;
              } = {};
              if (item.hidden) {
                wInfo.span = 0;
              } else if (item.span) {
                wInfo.span = item.span;
              } else if (item.flex) {
                wInfo.flex = item.flex;
              } else if (item.push) {
                wInfo.push = item.push;
              } else {
                wInfo.span = colW;
              }
              // eslint-disable-next-line no-param-reassign
              item.style = { ...item.style, flexWrap: "nowrap" };
              const colKey = `Col${item.key || item.label}`;
              return (
                <Col className={item.cls} {...wInfo} key={colKey}>
                  {renderFormItems([item], formDisabled)}
                </Col>
              );
            })}
          </Row>
        );
      }
      default:
        return "";
    }
  });

type Props = {
  formLayout: {
    labelCol: {
      span?: number | string;
      flex?: number | "none" | "auto" | string;
    };
    wrapperCol: {
      span?: number | string;
      flex?: number | "none" | "auto" | string;
    };
  };
  formItems: any[];
  formDisabled?: boolean; // form是否为可读状态
  values?: any;
  hideBtn?: boolean; // 控制是否显示按钮
  btnStatus?: boolean; // 控制是否显示展开收起
  layoutType?: "horizontal" | "vertical" | "inline";
  onFinish?: (values: any) => void; // 搜索数据
  onReset: () => void; // 重置表单
  onFinishFailed?: ({
    errorFields,
  }: {
    errorFields: {
      name: (string | number)[];
      errors: string[];
    }[];
  }) => void;
  onCancel?: () => void;
  /**
   * 可选，获取表单对象，支持在外部进行操作
   *
   * @memberof Props
   */
  setForm?: (form: FormInstance<any>) => void;
  style?: React.CSSProperties;
};

function SearchForm(props: Props) {
  const {
    formLayout,
    formItems,
    values,
    layoutType = "horizontal",
    hideBtn = false,
    formDisabled = false,
    setForm,
    onFinish,
    onReset,
    onFinishFailed,
    style,
    btnStatus = true,
  } = props;
  const [form] = Form.useForm();
  const [expandStatus, setExpandStatus] = useState(false);

  useEffect(() => {
    if (typeof setForm === "function") {
      setForm(form);
    }
  }, [form, setForm]);

  useEffect(() => {
    if (values) {
      form.setFieldsValue(values);
    }
  }, [values]);

  return (
    <div className="SearchForm" style={style}>
      <Form
        {...formLayout}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout={layoutType}
      >
        {btnStatus
          ? renderFormItems(
              expandStatus ? formItems : formItems.slice(0, 1),
              formDisabled
            )
          : renderFormItems(formItems, formDisabled)}
      </Form>
      {!hideBtn && (
        <Row
          justify="end"
          style={{
            marginTop: formItems?.[0]?.groupItems?.[2]?.type ? "" : "-42px",
          }}
        >
          <Space size={12}>
            <Button
              type="primary"
              htmlType="submit"
              size="small"
              onClick={() => {
                if (form) form.submit();
              }}
            >
              搜索
            </Button>
            <Button
              htmlType="button"
              onClick={() => {
                form.resetFields();
                onReset();
              }}
              size="small"
            >
              重置
            </Button>
            {formItems?.length > 1 && btnStatus && (
              <div>
                {" "}
                {expandStatus ? (
                  <Button
                    type="link"
                    onClick={() => {
                      setExpandStatus(false);
                    }}
                    size="small"
                  >
                    收起
                    <UpOutlined />
                  </Button>
                ) : (
                  <Button
                    type="link"
                    onClick={() => {
                      setExpandStatus(true);
                    }}
                    size="small"
                  >
                    展开
                    <DownOutlined />
                  </Button>
                )}
              </div>
            )}
          </Space>
        </Row>
      )}
    </div>
  );
}

export default SearchForm;
