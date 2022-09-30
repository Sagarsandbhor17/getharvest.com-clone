
import React from 'react'
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"
import { customerData } from './Customerdata'
import CustomerBox from "./CustomerBox"
const SearchCustomer = () => {
    const Container = styled.div`
    background-color: #fff8f1;
    width: 90%;
    margin: auto;
    margin-top: 120px;
    padding-bottom: 50px;
    ${mobile({ width: "100%" })}
    
  `;
const Head2=styled.h1`
     font-size: 42px;
    line-height:50.4px;
    
    font-weight: 400;
    
    text-align: left;
`
const FilterContainer = styled.div`
  /* width: 90%; */
  display: flex;
  /* border: 1px solid black; */
  padding: 10px;
  padding-left: 20px;
  margin-top: 50px;
  ${mobile({  paddingLeft: "0",padding: "5px" })}

`;
const FilterCategory = styled.div`
  flex: 1;
  /* background-color: blue; */
  padding: 10px;
  ${mobile({ display: "none" })}

`;
const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  width: 80%;
  font-size: 20px;
  border-radius: 10px;
  background-color: #fff8f1;
  text-align: left;

  cursor: pointer;
  &:first-child {
    background-color: #fee8d8;
    color: #fa5d00;
  }
  &:hover {
    background-color: #fee8d8;
  }
`;
const FilterData = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* border: 1px solid black; */
  ${mobile({ gap: "10px",width:"100%",})}


  /* background-color: crimson; */
`;


  return (
    <Container>
                 <Head2>Find stories from teams like yours</Head2>
        <FilterContainer>
    <FilterCategory>
      <Button>All industries</Button>
      <Button>Architecture</Button>
      <Button>Creative services</Button>
      <Button>Engineering & design</Button>
      <Button>Management consulting</Button>
      <Button>Web development & IT</Button>
    </FilterCategory>
    <FilterData>
      {customerData.map((item) => (
        <CustomerBox key={item.id} item={item} />
      ))}
    </FilterData>
  </FilterContainer>
</Container>

  )
}

export default SearchCustomer