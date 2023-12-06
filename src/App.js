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

import { useEffect, useState } from "react";

const PRODUCTS_MOCK = [
	{ id: "001", name: "Телевизор", price: 39900 },
	{ id: "002", name: "Смартфон", price: 18900 },
	{ id: "003", name: "Фен", price: 1749 },
];
export const App = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		new Promise((resolve) => {
			setTimeout(() => {
				resolve({ json: () => PRODUCTS_MOCK });
			}, 2500);
		})
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				products.map(({ id, name, price }) => (
					<div key={id}>
						{name} - {price} руб
					</div>
				))
			)}
		</div>
	);
};
