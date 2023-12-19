import { useMatch, useParams, useNavigate } from "react-router-dom";
import { database } from "../data-base";
import { useEffect, useState } from "react";
import { ProductNotFound } from "./notFound";

const fetchProduct = (id) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(database.products[id]);
		}, 2500);
	});

export const Product = () => {
	const [product, setProduct] = useState(null);
	const navigate = useNavigate();
	const params = useParams();
	const urlMatchData = useMatch("/catalog/:type/:id");
	console.log(urlMatchData);

	useEffect(() => {
		let isloadingTimeout = false;
		let isProductLoaded = false;

		setTimeout(() => {
			isloadingTimeout = true;
			if (!isProductLoaded) {
				navigate("./product-load-error", { replace: true });
			}
		}, 4000);

		fetchProduct(params.id).then((loadedProduct) => {
			isProductLoaded = true;

			if (!isloadingTimeout) {
				if (!loadedProduct) {
					navigate("./product-not-exist");
					return;
				}
				setProduct(loadedProduct);
			}
		});
	}, [params.id, navigate]);

	if (!product) {
		return null;
	}

	const { name, price, amount } = product;

	return (
		<div>
			<h3>Товар - {name}</h3>
			<div>Цена: {price} руб.</div>
			<div>На складе: {amount} шт.</div>
		</div>
	);
};
