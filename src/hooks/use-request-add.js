import { useState } from "react";

export const useRequestAdd = (refreshProducts, setRefreshProducts) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAdd = () => {
		setIsCreating(true);

		fetch("http://localhost:3005/products", {
			method: "POST",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				name: "Пылесос",
				price: 4690,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Пылесос добавлен, ответ сервера:", response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsCreating(false));
	};

	return { isCreating, requestAdd };
};
