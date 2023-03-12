import { Spin } from "antd";

const Loading = ({ tip = "loading" }: { tip?: string }) => (
  <Spin tip={tip} size="large" />
);

export default Loading;
