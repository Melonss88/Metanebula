import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <Spin size="large" />
      <p className="mt-10">Loading...</p>
    </div>
  );
};

export default Loading;
