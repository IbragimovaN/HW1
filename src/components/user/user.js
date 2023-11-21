import { Contacts } from "../contacts/contacts";
import styles from "./user.module.css";
import { Label } from "../label/label";

export const User = (props) => {
  const { name, age, ...contacts } = props;
  return (
    <div>
      <Label color={"blue"}>Пользователь</Label>
      <div>Имя: {name}</div>
      <div>Возраст: {age}</div>
      <Contacts {...contacts} />
    </div>
  );
};
