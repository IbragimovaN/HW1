import { createStore } from "redux";

export const initialState = {
	inputText: "",
	arr: ["новое поле", "еще"],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		// cases
		case "SET_INPUT": {
			return {
				...state,
				inputText: action.payload,
			};
		}
		case "SET_ARR": {
			return {
				...state,
				array: action.payload,
			};
		}

		default:
			return state;
	}
};

export const store = createStore(reducer);
