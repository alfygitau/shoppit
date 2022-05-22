import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <SubFooter>
          <Section>
            <img
              src="https://static.jamboshop.com/media/common/images/qualityAssurance.png"
              alt="del"
              height="60"
              width="60"
            />
            <Span>
              <h5 style={{ color: "rgb(237, 102, 28)" }}>100% value</h5>
              <p>Get value for every product</p>
            </Span>
          </Section>
          <span>||</span>
          <Section>
            <img
              src="https://static.jamboshop.com/media/common/images/easyReturn.png"
              alt="del"
              height="60"
              width="60"
            />
            <Span>
              <h5 style={{ color: "rgb(237, 102, 28)" }}>7 Days east return</h5>
              <p>Hassle Free Return Process.</p>
            </Span>
          </Section>
          <span>||</span>
          <Section>
            <img
              src="https://static.jamboshop.com/media/common/images/call24.png"
              alt="del"
              height="60"
              width="60"
            />
            <Span>
              <h5 style={{ color: "rgb(237, 102, 28)" }}>Customer care</h5>
              <p>+254 20 375 00 00</p>
            </Span>
          </Section>
          <span>||</span>
          <Section>
            <img
              src="https://static.jamboshop.com/media/common/images/freeHomeDelivery.png"
              alt="del"
              height="60"
              width="60"
            />
            <Span>
              <h5 style={{ color: "rgb(237, 102, 28)" }}>
                Delivery Everywhere
              </h5>
              <p>Let us deliver where you are</p>
            </Span>
          </Section>
        </SubFooter>
        <MainFooter>
          <Disclaimer>
            Copyright@2022 Shopee Incorporation All Rights Reserved
          </Disclaimer>
        </MainFooter>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
`;
const FooterContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 20vh;
`;
const SubFooter = styled.div`
  width: 80%;
  height: 20vh;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgb(245,245,245);
  @media (max-width: 768px){
    height: 50vh;
    display: flex;
    flex-direction: column;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Disclaimer = styled.h4`
  color: rgb(237, 102, 28);
`;
