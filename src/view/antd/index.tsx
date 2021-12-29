/*
 * @Author: zhangchenyang
 * @Date: 2021-10-08 15:27:14
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-10-21 16:16:25
 */
import React from "react";
import { Typography, Divider } from "antd";
const { Paragraph, Text } = Typography;

interface AntedProps {}
interface AntedStates {
  text: string;
}

export default class Antd extends React.Component<AntedProps, AntedStates> {
  constructor(props: AntedProps) {
    super(props);
    this.state = {
      text: "初始化～",
    };
  }
  static getDerivedStateFromProps() {
    console.log(123456);
    return null
  }

  render() {
    return (
      <>
        <Paragraph copyable={{ tooltips: ["复制", "复制成功"] }}>
          {this.state.text}
        </Paragraph>
        <Paragraph
          style={{ width: 100 }}
          ellipsis={{ rows: 1, expandable: true, symbol: "更多" }}
        >
          Ant Design, a design language for background applications, is refined
          by Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team. Ant
          Design, a design language for background applications, is refined by
          Ant UED Team. Ant Design, a design language for background
          applications, is refined by Ant UED Team. Ant Design, a design
          language for background applications, is refined by Ant UED Team.
        </Paragraph>
        <Text
          style={{ width: 200 }}
          ellipsis={{ tooltip: "I am ellipsis now!" }}
        >
          Ant Design, a design language for background applications, is refined
          by Ant UED Team.
        </Text>
        <Divider type="vertical" />
        <Divider type="horizontal" />
      </>
    );
  }
}
