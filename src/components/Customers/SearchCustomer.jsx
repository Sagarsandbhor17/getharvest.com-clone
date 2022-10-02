
import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"
import { customerData } from './Customerdata'
import CustomerBox from "./CustomerBox"

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

const SearchCustomer = () => {
  const [data, setData] = useState(customerData)
  

  const filterItem = (catItem) =>{
    const updatedItems = customerData.filter(ele =>(
      ele.category === catItem
    ))
    setData(updatedItems)
  }
  return (
    <Container>
                 <Head2>Find stories from teams like yours</Head2>
        <FilterContainer>
    <FilterCategory>
      <Button onClick={() => setData(customerData)}>All industries</Button>
      <Button onClick={() => filterItem("Architecture")}>Architecture</Button>
      <Button onClick={() => filterItem("Creative services")}>Creative services</Button>
      <Button onClick={() => filterItem("Engineering & design")}>Engineering & design</Button>
      <Button onClick={() => filterItem("Management consulting")}>Management consulting</Button>
      <Button onClick={() => filterItem("Web development & IT")}>Web development & IT</Button>
    </FilterCategory>
    <FilterData>
    {data.map((item) => (
        <CustomerBox key={item.id} item={item} />
      ))}
    </FilterData>
  </FilterContainer>
</Container>

  )
}

export default SearchCustomer