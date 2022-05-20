import {
  AlternateEmailOutlined,
  LocalPhoneOutlined,
  Login,
  PersonAddAlt,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Announcement = () => {
  const linkStyles = {
    marginRight: "10px",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
    color: "black"
  };
  const contactStyles = {
      display: "flex",
      alignItems: "center",
      color: "black"
  }

  return (
    <Container>
      <Wrapper>
        <Contact>
          <Tel style={contactStyles}>
            <LocalPhoneOutlined />
            +254 769 404 436
          </Tel>{" "}
          |
          <Email style={contactStyles}>
            <AlternateEmailOutlined />
            alfygitau@gmail.com
          </Email>
        </Contact>
        <Authentication>
          <NavLink style={linkStyles} to="/language">
            English
          </NavLink>
          <NavLink style={linkStyles} to="/currency">
            $ US Dollar
          </NavLink>
          <NavLink to="/register" style={linkStyles}>
            <PersonAddAlt /> &nbsp;
            Register
          </NavLink>{" "}
          |
          <NavLink to="/login" style={linkStyles}>
            <Login /> &nbsp;
            Sign in
          </NavLink>
        </Authentication>
      </Wrapper>
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  background-color: rgb(237, 102, 28);
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  height: 40px;
  width: 85%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  @media (max-width: 768px){
    display: flex;
    justify-content: space-evenly;
  }
`;
const Contact = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px){
    display: none;
  }
`;
const Authentication = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
const Tel = styled.h5`
  color: black;
  padding-right: 10px;
`;
const Email = styled.h5`
  color: black;
  padding-left: 10px;
`;
