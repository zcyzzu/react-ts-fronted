/*
 * @Author: zhangchenyang
 * @Date: 2021-08-09 17:28:54
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-10-08 15:26:16
 */
import React from "react";
import ReactDOM from "react-dom";
import "./common/style/index.css";
import reportWebVitals from "./reportWebVitals";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>{renderRoutes(routes)}</React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
