export const getCatalog = () =>
	fetch("http://localhost:3005/catalog")
		.then((data) => data.json())
		.then((data) => data);
