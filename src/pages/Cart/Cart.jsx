import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InputNumber } from "rsuite";
import styled from "styled-components";
import { clearCart, removeFromCart } from "../../Redux/Actions/CartActions";
import { ADD_TO_CART } from "../../Redux/Constants/ActionTypes";
import CheckOut from "../../utils/CartButtons/CheckOut";

const Cart = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleQtyChange = (e, product) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    //eslint-disable-next-line
    cart.map((cartItem) => {
      if (cartItem.id === product.id) {
        cartItem.quantity = e;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  const renderedCart = cart?.map((product) => (
    <CartSection key={product.id}>
      <ImageCont>
        <Link to={`/all-products/${product.id}`}>
          <Image src={product.image} alt="product" />
        </Link>
      </ImageCont>
      <Description>
        <p>{product.description.substring(0, 100)}...</p>
      </Description>
      <Quantity>
        <InputNumber
          defaultValue={product.quantity}
          max={100}
          min={1}
          style={{ width: "60px" }}
          onChange={(e) => handleQtyChange(e, product)}
        />
      </Quantity>
      <Price>
        <p>
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </Price>
      <RemoveButton>
        <Button onClick={(e) => handleRemoveFromCart(product)}>Remove</Button>
      </RemoveButton>
    </CartSection>
  ));

  const orderSummary = cart?.map((product) => (
    <Info key={product.id}>
      <InfoTitle>{product.title}</InfoTitle>
      <InfoPrice>
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </InfoPrice>
    </Info>
  ));

  return (
    <ChakraProvider>
      <Wrapper>
        <CartWrapper>
          <CartContent>
            <Section>
              <Span1>PRODUCTS</Span1>
              <Span2>QUANTITY</Span2>
              <Span3>PRICE</Span3>
              <Span4>OPTIONS</Span4>
            </Section>
            {cart?.length < 1 ? (
              <Empty>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
                  alt="emptycart"
                  height="200"
                  width="200"
                />{" "}
                <p style={{ marginTop: "10px" }}>Cart is empty</p>
              </Empty>
            ) : (
              renderedCart
            )}
            {cart.length < 1 ? (
              <Button
                style={{
                  width: "320px",
                  backgroundColor: "rgb(237, 102, 28)",
                  alignSelf: "center",
                  marginTop: "30px",
                }}
                onClick={() => navigate("/all-products")}
              >
                Go Shopping
              </Button>
            ) : (
              <Button
                style={{
                  width: "320px",
                  backgroundColor: "rgb(237, 102, 28)",
                  alignSelf: "center",
                  marginTop: "30px",
                }}
                onClick={() => navigate("/all-products")}
              >
                Continue Shopping
              </Button>
            )}
          </CartContent>
          <Checkout>
            <Coupons>
              <span style={{ fontWeight: "bold" }}>APPLY COUPONS</span>
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apply coupons"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text"
                  id="basic-addon2"
                  style={{
                    backgroundColor: "rgb(237, 102, 28)",
                    color: "white",
                  }}
                >
                  APPLY
                </span>
              </div>
            </Coupons>
            <Section>ORDER SUMMARY</Section>
            {orderSummary}
            <Info>
              <p>Special Discounts</p>
              <p>$ 0.00</p>
            </Info>
            <Info>
              <p>Shipping Charges</p>
              <p>$ 10.00</p>
            </Info>
            <Info
              style={{
                backgroundColor: "rgb(247, 247, 247)",
                fontWeight: "bold",
              }}
            >
              <p>ORDER TOTAL</p>
              <p>
                ${" "}
                {cart
                  .reduce(
                    (accumulator, currentValue) =>
                      accumulator + currentValue.quantity * currentValue.price,
                    0
                  )
                  .toFixed(2)}
              </p>
            </Info>
            <CheckOut />
            <Button onClick={handleClearCart} style={{ width: "320px" }}>
              CLEAR CART
            </Button>
          </Checkout>
        </CartWrapper>
      </Wrapper>
    </ChakraProvider>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 85%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const CartWrapper = styled.div`
  width: 82%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  gap: 1em;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;
const CartContent = styled.div`
  width: 70%;
  @media (max-width: 768px){
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
const Checkout = styled.div`
  width: 30%;
  margin-bottom: 20px;
  @media (max-width: 768px){
    width: 100%;
  }
`;
const CartSection = styled.section`
  display: flex;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;
const ImageCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 70%;
  height: 70%;
`;
const Description = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Quantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
  display: flex;
  background-color: rgb(247, 247, 247);
  margin-top: 10px;
  height: 40px;
  align-items: center;
  font-weight: bold;
`;
const Span1 = styled.span`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Span2 = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Span3 = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Span4 = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const Coupons = styled.section`
  display: flex;
  background-color: rgb(247, 247, 247);
  padding: 5px;
  flex-direction: column;
  margin-top: 10px;
`;
const Info = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`;
const InfoTitle = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const InfoPrice = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const RemoveButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;
const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
