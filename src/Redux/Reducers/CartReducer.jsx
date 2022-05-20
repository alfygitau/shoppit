import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../Constants/ActionTypes";

const initialState = {
  cart: [],
};

if (localStorage.getItem("cart")) {
  initialState.cart = JSON.parse(localStorage.getItem("cart"));
} else {
  initialState.cart = [];
}

export const cartReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: product,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: product,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
