export const database = {
	productList: [
		{ id: 1, name: "Телевизор" },
		{ id: 2, name: "Смартфон" },
		{ id: 3, name: "Планшет" },
	],
	products: {
		1: { id: 1, name: "Телевизор", price: 29900, amount: 15 },
		2: { id: 2, name: "Смартфон", price: 13900, amount: 48 },
		3: { id: 3, name: "Планшет", price: 18400, amount: 23 },
	},
};

export const productsList = () => database.productList;
