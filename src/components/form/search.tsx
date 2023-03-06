import { Form } from "antd";
import { FormInput } from "./FormItem";
import "./index.scss";

const formItemLayout = {
  labelCol: { flex: "100px" },
  wrapperCol: { flex: "1" },
};
function SearchForm({ formLayout = formItemLayout }: any) {
  const [form] = Form.useForm();
  return (
    <div className="searchContainer">
      <Form {...formLayout} form={form}>
        <FormInput name="userName" />
      </Form>
    </div>
  );
}

export default SearchForm;
