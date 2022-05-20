import { SearchOutlined } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  const selectStyles = {
    border: "none",
    outline: "none",
    backgroundColor: "white",
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search products, categories and keywords"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span
          className="input-group-text"
          id="basic-addon2"
          style={{ backgroundColor: "white" }}
        >
          <select defaultValue="Categories" style={selectStyles}>
            <option selected={true} value="categories">
              Categories
            </option>
            <option value="categories">Smartphones & iPhones</option>
            <option value="categories">Furnitures</option>
            <option value="categories">Clothes & Jewellery</option>
          </select>
        </span>
        <span
          className="input-group-text"
          id="basic-addon2"
          style={{ backgroundColor: "rgb(237, 102, 28)" }}
        >
          <SearchOutlined style={{ color: "white" }} />
        </span>
      </div>
    </>
  );
};

export default SearchBar;
