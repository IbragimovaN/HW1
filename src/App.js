// import styles from "./styles.module.css";
// import { User, Label } from "./components";

// const getUsersFromServer = () => ({
//   name: "Maxim",
//   age: 30,
//   email: "max@mail.ru",
//   phone: "+7-915-999-55-88",
// });

// function App() {
//   const user = getUsersFromServer();
//   return (
//     <div className={styles.container}>
//       <Label color={"red"}>Приложение</Label>
//       <div>Разная информация приложения</div>
//       <User
//         {...user}
//         // name={user.name}   //второй способ добавл пропса
//         // age={user.age}
//         // email={user.email}
//         // phone={user.phone}
//       />
//     </div>
//   );
// }
// export default App;

//До разделения на statefull и statless
import { useState } from "react";

export const AppStateful = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // сумму не нужно хранить в состоянии, она полностью вычисляется
  const sum = a + b;
  console.log(sum);
  return <AppStateless a={a} b={b} sum={sum} setA={setA} setB={setB} />;
};

//после разделения

const AppStateless = ({ a, b, sum, setA, setB }) => {
  return (
    <div>
      <div>A: {a}</div>
      <button onClick={() => setA(a + 1)}>Прибавить 1 к A</button>
      <div>B: {b}</div>
      <button onClick={() => setB(b + 1)}>Прибавить 1 к B</button>
      <div>Сумма A+B: {sum}</div>
    </div>
  );
};
