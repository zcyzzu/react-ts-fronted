/*
 * @Author: zhangchenyang
 * @Date: 2021-10-09 09:52:54
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-10-09 09:57:32
 */
import React from "react";
import { Typography } from 'antd';

export default class Grid extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Typography.Title type="warning" level={3} >This is grid</Typography.Title>
      </div>
    );
  }
}
