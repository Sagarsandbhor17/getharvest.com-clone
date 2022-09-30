import React from "react";
// import { Box, Heading, HStack, Stack, Image, Divider, Button, Icon } from '@chakra-ui/react'
// import style from "./feature.module.css"
import Timetracking from "./Timetracking";
// import Reports from './Reports'
// import Invoicing from './Invoicing'

import styled from "styled-components";
import { mobile } from "../integration/IntegrationResponsive";
import Reports from "./Reports";
import Invoicing from "./Invoicing";
import TodayTime from "../integration/TodayTime";

const Features = () => {
  const data = [
    {
      id: 0,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg",
      name: "Time tracking",
    },
    {
      id: 1,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg",
      name: "Reports & Analysis",
    },
    {
      id: 2,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg",
      name: "Invoicing & payments",
    },
  ];

  const Container = styled.div`
    width: 80%;
    margin: auto;
    align-items: center;
    text-align: start;
  `;
  const Heading = styled.h1`
    font-size: 50px;
    line-height: 60px;
    font-weight: 400;
    margin-bottom: 21px;
    margin-top: 60px;
  `;
  const SmallHeading = styled.h1`
    font-size: 29px;
    line-height: 37.7px;
  `;
  const Cart = styled.div`
    display: flex;
    margin-top: 50px;
    margin: auto;
    padding-bottom: 5%;
    padding-top: 5%;

    gap: 10px;
    ${mobile({ flexDirection: "column", width: "auto" })}
  `;
  const Box = styled.div`
    width: 30%;
    border: 1px solid #fa5d00;
    border-radius: 16px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    ${mobile({ width: "100%", margin: "auto" })}
  `;
  const LittleBox1 = styled.div`
    width: 70%;
    text-align: start;
    justify-content: space-between;
    display: flex;
  `;
  /* const LittleBox2 = styled.div`
    width:30%;
   ` */
  // const Count=styled.h4`

  // font-size: 42px;
  // line-height: 42px;
  // `
  const Name = styled.h5`
    font-size: 24px;
    line-height: 31.2px;
  `;
  const Image = styled.img`
    width: 20%;
  `;
  const Line = styled.hr`
    margin-top: 3%;
    width: 100%;
    height: 1px;
    background-color: #fa5d00;
    color: #fa5d00;
    ${mobile({ width: "100%" })}
  `;
  const Icon = styled.img`
    width: 24px;
  `;
  const FeatureContainer = styled.div`
    margin: auto;
    align-items: center;
  `;
  return (
    <>
      <Container>
        <Heading>Everything your team needs to keep ticking</Heading>
        <SmallHeading>
          Intuitive time tracking and powerful insights that help your team
          thrive.
        </SmallHeading>
        <Cart>
          {data.map((el) => (
            <Box key={el.id}>
              <Image src={el.img} />
              <LittleBox1>
                <Name>{el.name}</Name>
                <Icon src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" />
              </LittleBox1>
            </Box>
          ))}
        </Cart>
      </Container>
      <Line />
      <Timetracking />
      <Line />
      <Reports />
      <Line />
      <Invoicing />
      <Line />
      <TodayTime />
    </>
  );
};

export default Features;
