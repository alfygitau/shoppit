import {
  AddShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { addToCart } from "../../Redux/Actions/CartActions";

const ProductCard = ({ product, image }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to the cart");
  };

  return (
    <Container>
      <Image src={product.image || image} />
      <Info>
        <Icon>
          <AddShoppingCartOutlined onClick={handleAddToCart} />
        </Icon>
        <Icon>
          <Link to={`/all-products/${product.id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <p style={{fontWeight: "Bold", fontSize: "16px"}}>{product.title}</p>
      <p style={{fontWeight: "Bold"}}>$ {product.price}</p>
    </Container>
  );
};

export default ProductCard;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 10px;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid rgb(242, 241, 241);
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 70%;
  z-index: 2;
  width: 90%;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
