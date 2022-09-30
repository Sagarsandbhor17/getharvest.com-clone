import React from 'react'
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"
const CustomerContainer2 = () => {
    const Container2 = styled.div`
    background-color: #fff8f1;
    margin: auto;
    padding: 70px 20px 150px 150px;
    display: flex;
    align-items: center;
    ${mobile({padding : "20px",flexDirection:"column",})}
  `;
  
  const Image = styled.img`
  flex: 1;
  width: 50%;
 border-radius:16px;
  display: flex;
  align-items: center;
${mobile({width:"50%"})}

`;
const TextContainer = styled.div`
  flex: 3;
  margin-left:5%;
`;
const Head1 = styled.h1`
    font-size: 20px;
    line-height:20px;
    color:#fa5d00;
    font-weight: 400;
    
    text-align: left;
  ${mobile({fontSize:"30px"})}

`;
const Text1 = styled.div`
    font-size: 30px;
    font-weight: 400;
    text-align: left;
  ${mobile({fontSize:"20px"})}


`;
const Button1 = styled.button`
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 10px;
    background-color: black;
    display: flex;
    justify-content: flex-start;
    color: white;
    cursor: pointer;
  ${mobile({width:"100%", display:" inline-block",marginBottom:"50px" })}


    &:hover{
        background-color: #191919;
    }
`;
  return (
    <Container2>
        
        <Image src="https://www.getharvest.com/hubfs/customer-profile.jpg" />
       
        <TextContainer>
<Head1>FEATURED STORY</Head1>
<Text1>Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text1>
<Button1>Read customer story</Button1>
        </TextContainer>
    </Container2>
  )
}

export default CustomerContainer2