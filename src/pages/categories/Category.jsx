import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChakraProvider, Checkbox } from "@chakra-ui/react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showPage, setShowPage] = useState(true);

  const handleGetCategory = async (keyword) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${keyword}`
    );
    setShowPage(false);
    setCategoryData(response.data);
  };
  console.log(categoryData);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  const handleGetAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  console.log(products);

  return (
    <ChakraProvider>
      <MainContainer>
        <Categories>
          <Checkbox colorScheme="red">All Products</Checkbox>
          {categories.map((category) => (
            <Checkbox
              onChange={() => handleGetCategory(category)}
              colorScheme="red"
            >
              {category}
            </Checkbox>
          ))}
        </Categories>
        <Main>
          {showPage &&
            products.map((product) => <ProductCard product={product} />)}
          {!showPage &&
            categoryData.map((product) => <ProductCard product={product} />)}
        </Main>
      </MainContainer>
    </ChakraProvider>
  );
};

export default Category;

const MainContainer = styled.div`
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 100%;
`;

const Categories = styled.div`
  width: 80%;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
`;

const Main = styled.div`
  width: 80%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
`;
