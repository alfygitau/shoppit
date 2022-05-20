import ProductCard from "../../components/ProductCard/ProductCard";
import styled from "styled-components";
import useFetch from "../../Hooks/useFetch"

const AllProducts = () => {

  const {data: products} = useFetch("https://fakestoreapi.com/products?limit=20")

  return (
    <Wrapper>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default AllProducts;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
`;
