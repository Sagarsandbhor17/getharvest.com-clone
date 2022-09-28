import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
  width: 250px;
  padding: 15px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d8d2c9;
  }
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Desc = styled.div``;

const BoxCard = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
      </Container>
      
    </>
  );
};

export default BoxCard;
