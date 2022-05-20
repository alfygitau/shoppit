import React from "react";
import { Carousel } from "rsuite";
import styled from "styled-components";

const Slider = () => {
  return (
    <SliderContainer>
      <Carousel
        autoplay
        className="custom-slider"
        style={{
          height: "40vh",
          borderRadius: "10px",
        }}
      >
        <img
          src="https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slider"
        />
        <img
          src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slider"
        />
        <img
          src="https://images.pexels.com/photos/4109755/pexels-photo-4109755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slider"
        />
        <img
          src="https://images.pexels.com/photos/346749/pexels-photo-346749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slider"
          id="10"
        />
        <img
          src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="slider"
          id="10"
        />
      </Carousel>
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  width: 75%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
