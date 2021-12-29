/*
 * @Author: zhangchenyang
 * @Date: 2021-09-18 14:19:18
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-10-21 16:16:12
 */
import React from "react";
import { observer } from "mobx-react";
import {
  makeObservable,
  observable,
  action,
} from "mobx";
import { Button } from 'antd';

interface MobxProps {}

@observer
export default class Mobx extends React.Component<MobxProps> {
  @observable
  public name: string;
  @observable
  public age: number;

  componentDidMount(){
    console.log('componentDidMount', this.name);
  }

  static getDerivedStateFromProps(props: MobxProps) {
    console.log('getDerivedStateFromProps', props);
    return null
  }

  constructor(props: MobxProps) {
    super(props);
    this.name = "zcy";
    this.age = 18;
    makeObservable(this, {
      name: observable,
      age: observable,
      updateInfo: action,
    });
  }
  public updateInfo = (): void => {
    console.log("some api interface!");
    this.name = "nrq";
    this.age += 1;
  };

  render(): JSX.Element {
    console.log("this is render function!");
    return (
      <>
        <div>{ this.name }</div>
        <div>{ this.age }</div>
        <Button type="primary">Button</Button>
        <button onClick={this.updateInfo}>click</button>
      </>
    );
  }
}
