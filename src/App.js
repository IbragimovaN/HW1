import "./App.css";
import { useState } from "react";

/*---------------------1 способ-------------------------------*/
// function App() {
//   const onSubmit = (event) => {
//     event.preventDefault();
//     console.log({ login });
//   };

//   const [login, setLogin] = useState("");
//   const [loginError, setLoginError] = useState(null);

//   const onLoginChange = ({ target }) => {
//     setLogin(target.value);

//     let newError = null;
//     if (!/^[\w_]*$/.test(target.value)) {
//       newError =
//         "Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание";
//     } else if (target.value.length > 20) {
//       newError = "Неверный логин. Должно быть не больше 20 символов";
//     }
//     setLoginError(newError);
//   };

//   const onLoginBlur = ({ target }) => {
//     if (target.value.length < 3) {
//       setLoginError("Неверный логин. Должно быть не меньше 3 символов");
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={onSubmit}>
//         {loginError && <div>{loginError}</div>}
//         <input
//           type="text"
//           name="login"
//           placeholder="логин"
//           value={login}
//           onChange={onLoginChange}
//           onBlur={onLoginBlur}
//         />
//         <button type="submit" disabled={!!loginError}>
//           Отправить
//         </button>
//       </form>
//     </div>
//   );
// }
// export default App;

/*--------------------2 способ с помощью пакета yap----------------------------*/
import * as yup from "yup";
import { useRef } from "react";

//описываем схему для валидации для кажого обработчика
const loginChangeSchema = yup
  .string()
  .matches(
    /^[\w_]*$/,
    "Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание",
  )
  .max(20, "Неверный логин. Должно быть не больше 20 символов");

const loginBlurSchema = yup
  .string()
  .min(3, "Неверный логин. Должно быть не меньше 3 символов");

//функция, которая занимается валидацией с помощью описанных выше схем:
const validateAndGetErrorMessage = (schema, value) => {
  let errorMessage = null;

  try {
    schema.validateSync(value, { abortEarly: false });
  } catch ({ errors }) {
    errorMessage = errors.join("\n");
  }

  return errorMessage;
};

function App() {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState(null);

  const submitBattonRef = useRef(null);

  const onLoginChange = ({ target }) => {
    setLogin(target.value);
    const newError = validateAndGetErrorMessage(
      loginChangeSchema,
      target.value,
    );
    setLoginError(newError);

    if (target.value.length === 20) {
      submitBattonRef.current.focus();
    }
  };

  const onLoginBlur = () => {
    const error = validateAndGetErrorMessage(loginBlurSchema, login);
    setLoginError(error);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ login });
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        {loginError && <div>{loginError}</div>}
        <input
          type="text"
          name="login"
          placeholder="логин"
          value={login}
          onChange={onLoginChange}
          onBlur={onLoginBlur}
        />
        <button type="submit" disabled={!!loginError} ref={submitBattonRef}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default App;
