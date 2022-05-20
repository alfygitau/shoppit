import { FavoriteBorderOutlined, LocalMallOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../utils/Logo/Logo";
import SearchBar from "../../utils/SearchBar/SearchBar";
import Announcement from "../Announcement/Announcement";
import Navbar from "../Navbar/Navbar";

const Navigation = () => {

  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <Announcement />
      <Container>
        <NavContainer>
          <LogoName>
            <Logo />
          </LogoName>
          <Tabs>
            <SearchBar />
          </Tabs>
          <Auth>
            <Link
              style={{
                display: "Flex",
                flexDirection: "column",
                color: "black",
              }}
              to="/cart"
            >
              <Badge badgeContent={cart?.length} color="primary">
                <LocalMallOutlined
                  fontSize="large"
                  style={{ color: "rgb(237, 102, 28)" }}
                />
              </Badge>
              Cart
            </Link>
            {/* <Link to="/profile">{user?.firstName}</Link> */}
            <Link
              to="/wishlist"
              style={{
                display: "Flex",
                flexDirection: "column",
                color: "black",
              }}
            >
              <FavoriteBorderOutlined
                style={{ fontSize: "40px", color: "rgb(237, 102, 28)" }}
              />
              Wishlist
            </Link>
          </Auth>
        </NavContainer>
      </Container>
      <Navbar />
    </>
  );
};

export default Navigation;

const Container = styled.div`
  background-color: white;
`;

const NavContainer = styled.div`
  height: 110px;
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const LogoName = styled.div`
  height: 100px;
  width: 100px;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Tabs = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-evenly;
  @media (max-width: 768px){
    display: none;
  }
`;
const Auth = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
`;
