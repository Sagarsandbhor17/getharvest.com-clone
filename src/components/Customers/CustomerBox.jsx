import React from "react";
import styled from "styled-components";
import {mobile } from "../integration/IntegrationResponsive"
const Container = styled.div`
  /* border: 1px solid black; */
  width: 300px;
  height:200px;
  padding: 15px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: auto;
  ${mobile({width:"630px", display:"flex",padding:"10px" })}

  &:hover {
    background-color: #d8d2c9;
  }
`;
const Image = styled.img`
  width: 40%;
  /* height: 80px; */
  margin-bottom: 10px;
  ${mobile({marginRight:"20px" })}

`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`

const Desc = styled.div`
  text-align: left;
`;

const CustomerBox = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
        <Desc>{item.desc}</Desc>
        </Info>
      </Container>
      
    </>
  );
};

export default CustomerBox;