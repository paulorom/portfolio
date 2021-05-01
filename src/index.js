import React from "react";
import ReactDom from "react-dom";
import "./styles.scss";
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);
