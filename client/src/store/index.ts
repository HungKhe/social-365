import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/rootReducer";
import rootSaga from "../saga/rootSaga";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeSetup =
	process.env.NODE_ENV !== "production" &&
		typeof window === "object" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeSetup(applyMiddleware(sagaMiddleware))
	);
	sagaMiddleware.run(rootSaga);
	return store;
};
export default configureStore;
