import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { addToCart } from "../../Redux/Actions/CartActions";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log("cart", cart);

  localStorage.setItem("cart", JSON.stringify(cart));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to the cart");
  };

  console.log("product", product);
  return <Button onClick={handleAddToCart}>Add To Cart</Button>;
};

export default AddToCart;

const Button = styled.button`
  width: 300px;
  background-color: rgb(23, 96, 51);
  color: white;
  padding: 7px;
  margin-bottom: 20px;
`;
