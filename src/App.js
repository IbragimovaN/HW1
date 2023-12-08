import React from "react";
import styles from "./App.module.css";
// import { useState, useEffect } from "react";

// export function App() {
// 	const [counter, setCounter] = useState(0);
// 	useEffect(() => {
// 		console.log("Первый-" + counter);

// 		return () => console.log("Второй-" + counter);
// 	}, [counter]);

// 	return (
// 		<div className={styles.app}>
// 			<div>{counter}</div>
// 			<button onClick={() => setCounter(counter + 1)}>+ 1</button>
// 		</div>
// 	);
// }

import { useState } from "react";
import {
	useRequestDeleting,
	useRequestUpdate,
	useRequestAdd,
	useRequestGetProducts,
} from "./hooks";

export const App = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);
	const { products, isLoading } = useRequestGetProducts();
	const { isCreating, requestAdd } = useRequestAdd(
		refreshProducts,
		setRefreshProducts,
	);
	const { isUpdating, requestUpdate } = useRequestUpdate(
		refreshProducts,
		setRefreshProducts,
	);
	const { isDeleting, requestDeleting } = useRequestDeleting(
		refreshProducts,
		setRefreshProducts,
	);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				Object.entries(products).map(([id, { name, price }]) => (
					<div key={id}>
						{name} - {price} руб
					</div>
				))
			)}
			<button onClick={requestAdd} disabled={isCreating}>
				Добавить пылесос
			</button>
			<button onClick={requestUpdate} disabled={isUpdating}>
				Обновить смартфон
			</button>
			<button onClick={requestDeleting} disabled={isDeleting}>
				Удалить телевизор
			</button>
		</div>
	);
};
