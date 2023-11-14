import logo from "./logo.svg";
// import "./App.css";
import { MyComponent } from "./MyComponent";
import { ListComponent } from "./ListComponent";
import { ClickComponent } from "./ClickComponent";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo"></img>

        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <ListComponent />
        <ClickComponent />
      </header>
    </div>
  );
}
export default App;
