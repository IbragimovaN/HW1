import React from "react";
import styles from "./App.module.css";
import {
	Routes,
	Route,
	Link,
	Outlet,
	useParams,
	NavLink,
} from "react-router-dom";

const productsList = () => [
	{ id: 1, name: "Телевизор" },
	{ id: 2, name: "Смартфон" },
	{ id: 3, name: "Планшет" },
];

const fetchProduct = (id) =>
	({
		1: { id: 1, name: "Телевизор", price: 29900, amount: 15 },
		2: { id: 2, name: "Смартфон", price: 13900, amount: 48 },
		3: { id: 3, name: "Планшет", price: 18400, amount: 23 },
	})[id];
const NotFound = () => <div>Такая страница не существует</div>;
const ProductNotFound = () => <div>Такой товар не существует</div>;
const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => {
	return (
		<div>
			<h2>Контент каталога</h2>
			<ul>
				{productsList().map(({ id, name }) => (
					<li key={id}>
						<Link to={`product/${id}`}>{name}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
};

const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span className={styles.activeLink}>
						{children}
						<span className={styles.activeLinkIcon} />
					</span>
				</>
			) : (
				children
			)
		}
	</NavLink>
);

<ExtendedLink to="/">Главная</ExtendedLink>;

const Contacts = () => <div>Контент контактов</div>;
const Product = () => {
	const params = useParams();

	const product = fetchProduct(params.id);

	if (!product) {
		return <ProductNotFound />;
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
				</Route>
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};
