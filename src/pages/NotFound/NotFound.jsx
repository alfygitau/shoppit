import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <NotFoundContent>
        <Message>This page is not configured</Message>
        <Button onClick={() => navigate("/")}>Back to homepage</Button>
      </NotFoundContent>
    </Content>
  );
};

export default NotFound;

const Button = styled.button`
  padding: 7px;
  background-color: rgb(237, 102, 28);
  border-radius: 10px;
`;
const Message = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
const Content = styled.div`
  background-color: rgb(247, 247, 247);
`;
const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  flex-direction: column;
  background-color: white;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
