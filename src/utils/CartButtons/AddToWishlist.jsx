import { FavoriteBorderOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const AddToWishlist = () => {
  return (
    <Button>
      <FavoriteBorderOutlined />
      Add To Wishlist
    </Button>
  );
};

export default AddToWishlist;

const Button = styled.button`
  width: 300px;
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 7px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgb(237, 102, 28);
    color: white;
  }
`;
