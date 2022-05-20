import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginInitiate from "../../Redux/Actions/LoginActions";
import styled from "styled-components";
import Logo from "../../utils/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import toast from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "rgb(237, 102, 28)",
    padding: "7px",
    width: "120px",
    borderRadius: "5px",
    color: "white",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginInitiate(username, password));
    toast.success("successfully logged in")
    navigate("/all-products");
  };

  return (
    <Main>
      <LoginContainer>
        <Wrapper>
          <Logo />
          <Span>Welcome Dear Client</Span>
        </Wrapper>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Your Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Enter Your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </LoginContainer>
    </Main>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 50%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  border: 0.5px solid rgb(235, 235, 235);
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  margin-top: 100px;
`;

const Main = styled.div`
  background-color: rgb(247, 247, 247);
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Span = styled.span`
  display: block;
  padding: 10px;
  text-align: center;
  color: rgb(237, 102, 28);
`;
