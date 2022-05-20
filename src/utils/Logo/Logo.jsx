import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
      <Brand>
        <img
          src="https://senyumpeople.com/wp-content/uploads/2015/10/shopee.png"
          alt="logo"
          height="100"
          width="100"
        />
      </Brand>
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Brand = styled.h2`
  color: rgb(237, 102, 28);
`;
const Wrapper = styled.div`
  display: flex;
`;
