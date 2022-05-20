import React, { useEffect, useState } from "react";
import { ChakraProvider, Select } from "@chakra-ui/react";
import axios from "axios";

const DropdownMenu = () => {
  const [categories, setCategories] = useState([]);

  const selectStyles = {
    outline: "none",
    border: "none",
    backgroundColor: "white",
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <ChakraProvider>
      <Select placeholder="CATEGORIES" style={selectStyles}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </ChakraProvider>
  );
};

export default DropdownMenu;
