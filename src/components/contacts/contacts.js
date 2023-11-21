import { Label } from "../label/label";
import styles from "./contacts.module.css";

export const Contacts = ({ email, phone }) => {
  return (
    <div>
      <Label color={"green"}>Контакты</Label>
      <div>Почта: {email}</div>
      <div>Телефон: {phone}</div>
    </div>
  );
};
