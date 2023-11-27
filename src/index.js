import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Game } from "./Game";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
);
