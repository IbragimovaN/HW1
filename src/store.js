import { appReduser, initialState } from "./reduser";

const createStore = (reduser, initialState) => {
	let state = initialState;

	return {
		dispatch: (action) => {
			state = reduser(state, action);
		},
		subscribe(callback) {},
		getState: () => state,
	};
};

export const store = createStore(appReduser, initialState);
