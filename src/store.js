import { createStore } from "redux";

export const initialState = {
	inputText: "",
	array: ["новое поле", "еще"],
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
				array: state.array.push(action.payload),
			};
		}

		default:
			return state;
	}
};

const store = createStore(reducer);
