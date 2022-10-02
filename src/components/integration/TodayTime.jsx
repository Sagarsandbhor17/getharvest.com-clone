import React from 'react'
import styled from "styled-components";
import { mobile } from "./IntegrationResponsive";

const Container = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 70px 20px 150px 150px;
  display: flex;
  align-items: center;
  ${mobile({padding:"20px", flexDirection:"column"})}

  /* border: 1px solid black; */

`;

const Image = styled.img`
    flex: 1;
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    object-fit: contain;
  ${mobile({display:"none"})}

    /* border: 1px solid black; */

`;
const InfoContainer = styled.div`
  flex: 1;
  /* border: 1px solid black; */

`;
const Title = styled.h1`
    font-size: 40px;
    font-weight: 400;
    text-align: left;
`;
const TitleSmall = styled.div`
    font-size: 30px;
    font-weight: 400;
    text-align: left;

`;
const ButtonInfo = styled.div`
  margin-top: 20px;
  display: flex;
  ${mobile({flexDirection:"column",  display: "inline-block", width:"100%"})}

  /* border: 1px solid black; */
`
const ButtonRightInfo = styled.div`
  margin-left: 20px;
  font-size: 22px;
  font-weight: 300;
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
  ${mobile({fontSize:"18px",marginBottom:"20px"})}

`
const Button = styled.button`
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 10px;
    width: 220px;
    background-color: #fa5d00;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
  ${mobile({ display: "inline-block", width:"100%", marginBottom:"20px"})}

    /* border: 1px solid black; */


    &:hover{
        background-color: #e8702a;
    }
`;


const TodayTime = () => {
  return (
    <Container>
    <InfoContainer>
      <Title>Start tracking time today</Title>
      <TitleSmall>Join 70,000+ companies spending their time wisely with Harvest.</TitleSmall>
      <ButtonInfo>
      <a href="https://www.getharvest.com/signup" rel="noopener noreferrer"> <Button>Try Harvest Free</Button></a>
        <ButtonRightInfo>Free 30-day trial. No credit card required.</ButtonRightInfo>
        </ButtonInfo>
    </InfoContainer>
    <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" />
  </Container>
  )
}

export default TodayTime