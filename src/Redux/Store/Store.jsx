import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AllReducer from "../AllReducers";

const middleware = [thunk];

const composeEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(AllReducer, composeEnhancer);

export { store };
