import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppStateful } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppStateful />
  </React.StrictMode>,
);
