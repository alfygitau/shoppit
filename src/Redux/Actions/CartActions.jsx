import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../Constants/ActionTypes";

// export function addToCart(product) {
//   return {
//     type: ADD_TO_CART,
//     payload: product,
//   };
// // }
// export function removeFromCart(product) {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: product,
//   };
// }
// export function clearCart() {
//   return {
//     type: CLEAR_CART,
//   };
// }

export const addToCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const existingProduct = cart.filter((cartItem) => cartItem.id === product.id);
  if (existingProduct.length === 0) {
    const productToAdd = {
      ...product,
      quantity: 1,
    };
    cart.push(productToAdd);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  }
};

export const removeFromCart = (product) => async (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const remainingProducts = cart.filter(
    (cartItem) => cartItem.id !== product.id
  );

  cart.push(remainingProducts);
  localStorage.setItem("cart", JSON.stringify(remainingProducts));
  dispatch({
    type: REMOVE_FROM_CART,
    payload: remainingProducts,
  });
};

export const clearCart = () => (dispatch) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const emptycart = [];
  cart.push(emptycart);
  localStorage.removeItem("cart");

  dispatch({
    type: CLEAR_CART,
  })
};
