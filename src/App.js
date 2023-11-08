//На всех строчка используется декларативный стиль, тк нет описания шагов получения результата, а только описание необходимого результата.
import logo from "./logo.svg";
import "./App.css";
import { nowYear } from "./index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="nowYear">{nowYear}</div>
      </header>
    </div>
  );
}

export default App;
