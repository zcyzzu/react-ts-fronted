/*
 * @Author: zhangchenyang
 * @Date: 2021-08-09 17:56:14
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-10-09 09:54:53
 */
import React from "react";
import { RouteConfig } from "react-router-config";
import Home from "./view/home/App";
import Setting from "../src/view/setting/setting";
import Login from "./view/login/login";
import Mobx from "./view/mobx";
import Antd from "./view/antd";
import Grid from "./view/grid";
import { Redirect } from "react-router-dom";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    render: (): JSX.Element => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/mobx",
    component: Mobx,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/antd",
    component: Antd,
  },
  {
    path: "/grid",
    component: Grid,
  },
];
export default routes;
