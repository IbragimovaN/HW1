import styles from "./App.module.css";
import { useForm } from "react-hook-form";

const sendFormData = (formData) => {
  console.log(formData);
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //начальное значение

      login: "",
    },
  });

  const loginError = errors.login?.message;

  const loginProps = {
    minLength: {
      value: 3,
      message: "Неверный логин. Должно быть не меньше 3 символов",
    },
    maxLength: {
      value: 20,
      message: "Неверный логин. Должно быть не больше 20 символов",
    },
    pattern: {
      value: /^[\w_]*$/,
      message:
        "Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание",
    },
  };
  return (
    <div className={styles.App}>
      <form onSubmit={handleSubmit(sendFormData)}>
        {loginError && <div>{loginError}</div>}
        <input name="login" type="text" {...register("login", loginProps)} />
        <button type="submit" disabled={!!loginError}>
          отправить
        </button>
      </form>
    </div>
  );
}
export default App;
