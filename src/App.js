import logo from "./logo.svg";
import "./App.css";
// import { nowYear } from "./index";
import { MyComponent } from "./MyComponent";
import { ListComponent } from "./ListComponent";

// import { createElement } from "react";

// function App() {
//   return createElement(
//     "div",
//     { className: "App" },
//     "",
//     createElement(
//       "header",
//       { className: "App-header" },
//       "",
//       createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
//       createElement(
//         "p",
//         null,
//         "Edit ",
//         createElement("code", null, "src/App.js"),
//         "and save to reload.",
//       ),
//       createElement(
//         "a",
//         {
//           className: "App-link",
//           href: "https://reactjs.org",
//           target: "_blank",
//           rel: "noopener noreferrer",
//         },
//         "Learn React",
//       ),
//       createElement("div", { className: "nowYear" }, nowYear),
//     ),
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>

        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <ListComponent />
        {/* <div>{nowYear}</div> */}
      </header>
    </div>
  );
}
export default App;
