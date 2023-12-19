import { Link, Outlet } from "react-router-dom";
import { productsList } from "../data-base";
export const Catalog = () => {
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
