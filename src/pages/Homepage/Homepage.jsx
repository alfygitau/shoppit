import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";
import Slider from "../../utils/ImageSlide/Slider";
import useFetch from "../../Hooks/useFetch";

const Homepage = () => {
  const { data: products } = useFetch(
    "https://fakestoreapi.com/products?limit=20"
  );

  return (
    <Home>
      <Slide>
        <Category>
          <Title>Trending Categories</Title>
          <Tabs>Smartphones and Iphones</Tabs>
          <Tabs>Cameras and Photos</Tabs>
          <Tabs>Clothes and Jewellery</Tabs>
          <Tabs>Electrical and electronics</Tabs>
          <Tabs>Motorvehicles spares and parts</Tabs>
        </Category>
        <Slider />
      </Slide>
      <HomeContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </HomeContainer>
    </Home>
  );
};

export default Homepage;

const Home = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(247, 247, 247);
`;

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;
const Slide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: 45vh;
  /* border: 2px solid rgb(230, 247, 255); */
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
  /* align-items: center; */
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
`;
const Category = styled.div`
  width: 20%;
  @media (max-width: 768px){
    display: none;
  }
`;
const Tabs = styled.h6`
  padding: 5px;
`;
const Title = styled.h5`
  color: rgb(25, 118, 210);
  font-weight: bold;
  padding: 5px;
`;
