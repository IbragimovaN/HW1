import logo from "./logo.svg";
import "./App.css";
import { nowYear } from "./index";
import { createElement } from "react";

function App() {
  return createElement(
    "div",
    { className: "App" },
    "",
    createElement(
      "header",
      { className: "App-header" },
      "",
      createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
      createElement(
        "p",
        null,
        "Edit ",
        createElement("code", null, "src/App.js"),
        "and save to reload.",
      ),
      createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React",
      ),
      createElement("div", { className: "nowYear" }, nowYear),
    ),
  );
}
export default App;
