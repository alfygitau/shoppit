import { combineReducers } from "redux";
import { cartReducer } from "./Reducers/CartReducer";
import LoginReducer from "./Reducers/LoginReducer";

// const persistConfig = {
//     key: "auth",
//     storage,
//     whitelist: ['user']
// }

const AllReducer = combineReducers({
  login: LoginReducer,
  cart: cartReducer,
});

export default AllReducer;
