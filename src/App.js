import styles from "./styles.module.css";
import { User, Label } from "./components";

const getUsersFromServer = () => ({
  name: "Maxim",
  age: 30,
  email: "max@mail.ru",
  phone: "+7-915-999-55-88",
});

function App() {
  const user = getUsersFromServer();
  return (
    <div className={styles.container}>
      <Label color={"red"}>Приложение</Label>
      <div>Разная информация приложения</div>
      <User
        {...user}
        // name={user.name}   //второй способ добавл пропса
        // age={user.age}
        // email={user.email}
        // phone={user.phone}
      />
    </div>
  );
}
export default App;
