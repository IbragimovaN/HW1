import { useEffect, useState } from "react";

export const useRequestGetProducts = (refreshProducts) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);

		fetch("http://localhost:3005/products")
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProducts]);

	return { products, isLoading };
};
