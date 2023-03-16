import { Form, Button, Space } from "antd";
import RenderFormItem from "./FormItem/renderFormItem";
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
function BasicsForm({
  formLayout,
  onFinish = () => {},
  onFinishFailed = () => {},
  style = {},
  formData,
}: any) {
  const [form] = Form.useForm();
  const onReset = ()=>{}
  return (
    <Form
      {...formLayout}
      style={style}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>重置</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default BasicsForm;
