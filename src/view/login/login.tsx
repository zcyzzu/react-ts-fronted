/*
 * @Author: zhangchenyang
 * @Date: 2021-08-09 18:22:09
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-12-30 16:19:14
 */
import React from "react";
// import styles from "./login.less";
import Cropper from "cropperjs";

interface LoginState {
  name: string;
}

export default class Login extends React.Component<LoginState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "zcy",
    };
  }
  private formRef = React.createRef<HTMLImageElement>();

  componentWillMount(): void {
    console.log("componentWillMount", "1");
  }

  render(): JSX.Element {
    console.log("render", 2);
    return (
      <img
        id="aaa"
        src="https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg"
        alt="logo"
        ref={this.formRef}
      />
    );
  }

  componentDidMount(): void {
    console.log("componentDidMount", 3);
    const cropper = new Cropper((this.formRef.current as unknown as HTMLImageElement), {
      aspectRatio: 16 / 9,
        cropBoxResizable: true,
        cropBoxMovable: true,
        dragMode: "move",
        // left: 0,
        // top: 0,

        // toggleDragModeOnDblclick: true,
        // zoomOnTouch: true,
        // zoomOnWheel: true,

        // minContainerWidth: 500,
        // minContainerHeight: 500,

        // minCanvasWidth: 400,
        // minCanvasHeight: 400,

        // minCropBoxWidth: 200,
        // minCropBoxHeight: 200,
      
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
    console.log(cropper, 'this is cropper');
    this.setState({
      name: "nrq",
    });
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps", 4);
  }

  componentWillUpdate() {
    console.log("componentWillUpdate", 5);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", 6);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", 7);
  }
}
