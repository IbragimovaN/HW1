import { store } from "../../../../store";

export const UserPersonalInfo = () => {
	const { name, age, email, phone } = store.getState();
	const onUserUpdate = () => {
		const { name, email, phone } = store.getState();
		const newUserData = { name, age: 30, email, phone };
		// setUserData(newUserData)
		store.dispatch({ type: "SET_USER_DATA", payload: newUserData });
	};

	const onUserAgeDecrease = () => {
		store.dispatch({ type: "SET_USER_AGE", payload: 15 });
	};

	return (
		<div>
			<h2>Персональные данные</h2>
			<div>Имя: {name}</div>
			<div>Возраст:{age}</div>
			<button onClick={onUserUpdate}>Обновить возраст</button>
			<button onClick={onUserAgeDecrease}>Уменьшить возраст</button>
		</div>
	);
};
