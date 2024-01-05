import styles from "./App.module.css";
import { Header, UserBlock } from "./components";
import { useEffect } from "react";
import { store } from "./store";

const getUserFromServer = () => ({
	id: "a1001",
	name: "Иван",
	age: 25,
	email: "ivan@mail.ru",
	phone: "+7999-999-99-99",
});

const getAnotherUserFromServer = () => ({
	id: "a1002",
	name: "Василий",
	age: 35,
	email: "vasya@mail.ru",
	phone: "+7999-999-99-98",
});

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();
		store.dispatch({ type: "SET_USER_DATA", payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const newUserDataFromServer = getAnotherUserFromServer();
		store.dispatch({ type: "SET_USER_DATA", payload: newUserDataFromServer });
	};

	return (
		<div className={styles.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
