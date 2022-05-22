import { MenuOutlined } from "@mui/icons-material";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import DropdownMenu from "../../utils/Dropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const linkStyles = {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
  };

  return (
    <Container>
      <MainNav>
        <Categories>
          <MenuOutlined
            style={{ color: "white", cursor: "pointer" }}
            onClick={() => navigate("/categories")}
          />{" "}
          &nbsp;
          <DropdownMenu />
        </Categories>
        <Tabs>
          <NavLink style={linkStyles} to="/">
            Home
          </NavLink>
          <NavLink style={linkStyles} to="/all-products">
            All Products
          </NavLink>
          <NavLink style={linkStyles} to="/featured-products">
            Featured Products
          </NavLink>
          <NavLink style={linkStyles} to="/about">
            New Products
          </NavLink>
          <NavLink style={linkStyles} to="/contact">
            Old School
          </NavLink>
          <NavLink style={linkStyles} to="/contact">
            About
          </NavLink>
          <NavLink style={linkStyles} to="/contact">
            Contact
          </NavLink>
        </Tabs>
      </MainNav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: rgb(237, 102, 28);
`;
const MainNav = styled.div`
  height: 50px;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const Categories = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Tabs = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px){
    display: none;
  }
`;
