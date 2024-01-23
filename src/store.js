import { legacy_createStore as createStore } from "redux";
import { userReducer } from "./redusers/userReduser";
import { productsReducer } from "./redusers/productsReduser";
import { combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

export const reducer = combineReducers({
	userState: userReducer,
	productState: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
