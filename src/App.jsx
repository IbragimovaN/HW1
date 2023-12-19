import React from "react";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import {
	NotFound,
	ProductNotFound,
	ProducctLoadError,
} from "./components/notFound";
import { Contacts } from "./components/contacts";
import { MainPage } from "./components/main-page";
import { ExtendedLink } from "./components/extemded-link";
import { Product } from "./components/products";
import { Catalog } from "./components/catalog";

export const App = () => {
	return (
		<div className={styles.app}>
			<div>
				<h3>Меню</h3>
				<ul>
					<li>
						<ExtendedLink to="/">Главная</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/catalog">Каталог</ExtendedLink>
					</li>
					<li>
						<ExtendedLink to="/contacts">Контакты</ExtendedLink>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/catalog" element={<Catalog />}>
					<Route path="product/:id" element={<Product />} />
					<Route path="service/:id" element={<Product />} />
				</Route>

				<Route path="/contacts" element={<Contacts />} />
				<Route path="/product-load-error" element={<ProducctLoadError />} />
				<Route path="/product-not-exist" element={<ProductNotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};
