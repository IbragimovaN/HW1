import { useEffect, useState } from "react";
import { getCatalog } from "./api";
import _ from "lodash";
import { SortSelect } from "./Sort-select";

const sortOption = [
	{
		value: "priceDESC",
		label: "По убыванию цены",
		sort: (data) => _.orderBy(data, ["price"], ["desc"]),
	},
	{
		value: "priceASC",
		label: "По возрастанию цены",
		sort: (data) => _.orderBy(data, ["price"], ["asc"]),
	},
	{
		value: "ratingDESC",
		label: "По убыванию рейтинга",
		sort: (data) => _.orderBy(data, ["rating"], ["desc"]),
	},
];

export const App = () => {
	const [catalog, setCatalog] = useState([]);
	const [sortBy, setSortBy] = useState({ path: "price", order: "asc" });
	const [currentSorting, setCurrentSorting] = useState("priceDesc");
	// const sortData = _.orderBy(catalog, [sortBy.path], [sortBy.order]);

	useEffect(() => {
		getCatalog().then((data) => setCatalog(data));
	}, []);

	const onClickSort = (e) => {
		setCurrentSorting(e.target.value);
	};

	// const onCkicjSort = () => {
	// 	setSortBy((prevState) => ({
	// 		...prevState,
	// 		order: prevState.order === "desc" ? "asc" : "desc",
	// 	}));
	// };

	useEffect(() => {
		const sortObj = sortOption.find((item) => item.value === currentSorting);
		if (sortObj) {
			setCatalog(sortObj.sort(catalog));
		}
	}, [currentSorting, catalog]);

	return (
		<div>
			{/* <button onClick={onCkicjSort}>сортировать по {sortBy.order}</button> */}
			<SortSelect
				option={sortOption}
				onSort={onClickSort}
				value={currentSorting}
			/>
			<ul>
				{catalog.length > 0 &&
					catalog.map(({ id, title, rating, price }) => (
						<li style={{ border: "1px solid black" }} key={id}>
							<div>{title}</div>
							<div> {price}</div>
							<div>Рейтинг: {rating}</div>
						</li>
					))}
			</ul>
		</div>
	);
};
