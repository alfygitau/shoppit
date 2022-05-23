import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCart from "../../utils/CartButtons/AddToCart";
import AddToWishlist from "../../utils/CartButtons/AddToWishlist";
import BuyNow from "../../utils/CartButtons/BuyNow";

const Details = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const singleProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    };
    singleProduct();
  }, [id]);

  const resultPrice = product.price - product.price * 0.1;

  return (
    <MainContainer>
      <DetailsContainer>
        <ProductImage>
          <Image src={product.image} />
        </ProductImage>
        <Highlights>
          <Brand>Brand: Generic</Brand>
          <Title>{product.title}</Title>
          <hr />
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Rating
          </span>
          <Rating value={4} />
          <hr />
          <span>Highlights</span>
          <ul style={{ listStyleType: "none" }}>
            <li>Reliable</li>
            <li>Durable</li>
            <li>Fancy</li>
            <li>High quality product</li>
          </ul>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            Description
          </span>
          <Description>{product.description}</Description>
        </Highlights>
        <CartButtons>
          <Price>USD {product.price}</Price>
          <Discount>Total Discount: 10%</Discount>
          <ResultPrice>USD {resultPrice}</ResultPrice>
          <BuyNow />
          <AddToCart product={product} />
          <AddToWishlist />
          <Delivery>
            <span>Estimated Delivery Time</span> &nbsp;
            <hr />
            <span>2 to 5 business days(holiday is an exception)</span>
          </Delivery>
        </CartButtons>
      </DetailsContainer>
    </MainContainer>
  );
};

export default Details;

const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
`;
const DetailsContainer = styled.div`
  width: 80%;
  height: 85vh;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  display: flex;
  margin-top: 40px;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 20px;
  }
`;
const ProductImage = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid rgb(244, 244, 244);
  padding: 5px;
  /* align-items: center; */
  justify-content: center;
`;
const Highlights = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5px;
  border: 1px solid rgb(244, 244, 244);
`;
const CartButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: 1px solid rgb(244, 244, 244);
  padding: 5px;
  align-items: center;
`;
const Image = styled.img`
  width: 80%;
  height: 60%;
  margin-top: 20px;
`;
const Brand = styled.h6`
  color: rgb(237, 102, 28);
`;
const Title = styled.h4`
  display: block;
  background-color: rgb(247, 247, 247);
  padding: 10px;
`;
const Description = styled.p``;

const Price = styled.h5`
  text-decoration: line-through;
`;

const Discount = styled.span``;

const ResultPrice = styled.h5``;
const Delivery = styled.span`
  display: block;
  background-color: rgb(247, 247, 247);
  padding: 10px;
`;
