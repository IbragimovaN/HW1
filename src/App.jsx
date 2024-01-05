import styles from "./App.module.css";
import { Header, UserBlock } from "./components";
import { useEffect } from "react";
// import { store } from "./store";
import { createStore } from "redux";
import { appReduser } from "./reduser";
import { initialState } from "./reduser";

const store = createStore(appReduser, initialState);

/*начало.код из документации*/
function select(state) {
	return state.name;
}

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = select(store.getState());
	console.log(currentValue);
	if (previousValue !== currentValue) {
		console.log(
			"Some deep nested property changed from",
			previousValue,
			"to",
			currentValue,
		);
	}
}
const unsubscribe = store.subscribe(handleChange);
/*конец.код из документации*/

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
		console.log(store.getState());
		/*вызываем код из документации*/
		unsubscribe();
		/*конец*/
	};

	return (
		<div className={styles.app}>
			<Header />
			{currentValue}
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
