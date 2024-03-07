import React, { useState } from "react";
import logo from "./logo.svg";
import RecordButton, { Result } from "./lib/recordButton";
import { Divider, List, Typography } from "antd";
import DemoPage from "./pages/demoPage";

function App() {
  const [list, setList] = useState<Result[]>([]);

  const [demoText, setDemoText] = useState("");

  const onResult = (result: Result) => {
    setDemoText(result.text);
    setList((prev) => [...prev, result]);
  };

  return (
    <div>
      <DemoPage text={demoText} />
      <RecordButton onResult={onResult} />
      <Divider orientation="left">识别记录</Divider>
      <List
        bordered
        dataSource={list}
        renderItem={(item, index) => {
          return (
            <List.Item style={{ justifyContent: "flex-start" }}>
              {/* 序号 */}
              <span>{index + 1}</span>
              {/* 耗时 */}
              <Typography.Text mark style={{ margin: "0 6px" }}>
                识别耗时：{item.transcribe_time}
              </Typography.Text>
              {/* 内容 */}
              <span style={{ margin: "0 6px" }}>{item.text}</span>
            </List.Item>
          );
        }}
      />
    </div>
  );
}

export default App;
