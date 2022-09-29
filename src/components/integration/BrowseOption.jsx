import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff8f1;
  margin: auto;
  padding: 70px 20px 150px 150px;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
    flex: 1;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
`;
const InfoContainer = styled.div`
  flex: 3;
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
const Button = styled.button`
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #191919;
    }
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: red;
  color: red;
`;
const BrowseOption = () => {
  return (
    <>
    <Container>
      <Image src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/illo-180-integrations.svg" />
      <InfoContainer>
        <Title>Build your own Harvest integration</Title>
        <TitleSmall>Extend the functionality of your app by easily adding Harvest <br /> timers, or build a bespoke integration with the Harvest API.</TitleSmall>
        <Button>Browse options</Button>
      </InfoContainer>
    </Container>
    <Line />
    <br />
    <br />
    </>
  );
};

export default BrowseOption;
