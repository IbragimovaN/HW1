import { useState } from "react";

export const useRequestDeleting = (refreshProducts, setRefreshProducts) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleting = () => {
		setIsDeleting(true);
		fetch("http://localhost:3005/products/001", {
			method: "DELETE",
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log("Телевизор удален:", response);
				setRefreshProducts(!refreshProducts);
			})
			.finally(() => setIsDeleting(false));
	};

	return { isDeleting, requestDeleting };
};
