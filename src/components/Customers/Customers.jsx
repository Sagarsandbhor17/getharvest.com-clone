import React from "react";
import styled from "styled-components";
import { mobile } from "../integration/IntegrationResponsive";
import TodayTime from "../integration/TodayTime";
import CustomerContainer2 from "./CustomerContainer2";
import Customerlogos from "./Customerlogos";
import SearchCustomer from "./SearchCustomer";

const Customers = () => {
  const data = [
    {
      id: 0,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg",
      count: "70,000+",
      name: "customers",
    },
    {
      id: 1,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg",
      count: "2 billion",
      name: "hours tracked",
    },

    {
      id: 2,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg",
      count: "19.6 million",
      name: "invoices paid",
    },
  ];
  const imgData = [
    {
      id: 0,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize",
    },
    {
      id: 1,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize",
    },

    {
      id: 2,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize",
    },
    {
      id: 3,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize",
    },
    {
      id: 4,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize",
    },

    {
      id: 5,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize",
    },
    {
      id: 6,
      img: "https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize",
    },
  ];

  const Container = styled.div`
    width: 100%;
    margin: auto;
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
    margin-left: 10%;

    ${mobile({ flexDirection: "column", width: "auto" })}
  `;
  const Box = styled.div`
    width: 30%;
    border: 1px solid #fa5d00;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-left: none;

    ${mobile({ width: "100%", margin: "auto" })}
  `;
  const LittleBox1 = styled.div`
    width: 70%;
    text-align: start;
    align-items: flex-start;
  `;
  /* const LittleBox2 = styled.div`
    width:30%;
   ` */
  const Count = styled.h4`
    font-size: 42px;
    line-height: 42px;
  `;
  const Name = styled.h5`
    font-size: 26px;
    line-height: 26px;
  `;
  const Image = styled.img`
    width: 30%;
  `;
  const Line = styled.hr`
    margin-top: 3%;
    width: 100%;
    height: 1px;
    background-color: red;
    color: red;
    ${mobile({ width: "100%" })}
  `;
  return (
    <>
      <Container>
        <Heading>See how Harvest helps teams like yours thrive</Heading>
        <SmallHeading>
          Teams of all sizes, across industries, and around the world track time
          with Harvest.
        </SmallHeading>
        <Cart>
          {data.map((el) => (
            <Box key={el.id}>
              <LittleBox1>
                <Count>{el.count}</Count>
                <Name>{el.name}</Name>
              </LittleBox1>

              <Image src={el.img} />
            </Box>
          ))}
        </Cart>
      </Container>
      <CustomerContainer2 />
      <Customerlogos />
      <Line />
      <SearchCustomer />
      <Line />
      <TodayTime />
    </>
  );
};

export default Customers;
