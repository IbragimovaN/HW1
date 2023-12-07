import { useState } from "react";
export const useRequestUpdate = (refreshProducts, setRefreshProducts) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdate = () => {
		setIsUpdating(true);
		fetch("http://localhost:3005/products/002", {
			method: "PUT",
			headers: { "Content-Type": "application/json;charset=utf-8" },
			body: JSON.stringify({
				name: "Смартфон",
				price: 17900,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Данные о смартфоне обновлены:", response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsUpdating(false));
	};

	return { isUpdating, requestUpdate };
};
