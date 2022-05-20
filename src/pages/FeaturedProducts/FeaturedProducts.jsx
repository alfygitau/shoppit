import { ChakraProvider, Radio } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allFeaturedProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(response.data.products);
    };
    allFeaturedProducts();
  }, []);
  console.log(products);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <ChakraProvider>
        <MainContainer>
          <Categories>
            {categories.map((category) => (
              <Radio value={category}>{category}</Radio>
            ))}
          </Categories>
          <Wrapper>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                image={product.thumbnail}
              />
            ))}
          </Wrapper>
        </MainContainer>
      </ChakraProvider>
    </>
  );
};

export default FeaturedProducts;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Categories = styled.div`
  height: 80px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  margin-top: 40px;
  flex-wrap: wrap;
  border-radius: 5px;
`;
