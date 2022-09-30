import React from 'react'
import invoices from "./assets/invoices.png"
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"

const Invoicing = () => {

    const img=invoices
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg",
            title:"Streamline your invoicing",
            content:"Easily create and send accurate invoices using your team’s time and expenses already tracked in Harvest."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg",
            title:"Get paid fast with online payments",
            content:"PayPal and Stripe integrations let your clients quickly and conveniently pay invoices online."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg",
            title:"Keep your books up to date",
            content:"Automatically copy your Harvest invoices and payments to QuickBooks Online or Xero for simplified accounting."
        }
    ]
    const Container2 = styled.div`
        background-color: #fff8f1;
        margin: auto;
        padding: 70px 20px 150px 150px;
        display: flex;
        align-items: center;
        ${mobile({padding : "20px",flexDirection:"column",})}
      `;
      
      const BigImage = styled.img`
      flex: 1;
      width: 60%;
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
        font-size: 42px;
        line-height:50.4px;
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
        background-color: #fa5d00;
        display: flex;
        justify-content: flex-start;
        color: white;
        cursor: pointer;
      ${mobile({width:"100%", display:" inline-block",marginBottom:"50px" })}
    
    
        &:hover{
            background-color: #191919;
        }
    `;
    const Cart=styled.div`
     display: flex;
    width:80%;
   justify-content: space-evenly;
   gap:20px;
  margin: auto; 
   align-items: center;
   ${mobile({padding : "20px",flexDirection:"column",width:"auto"})}
    `
    const Box1=styled.div`
         width:30%;
         height:auto;
         border:1px solid #fff8f1;
         ${mobile({width:"100%",margin:"auto"})}
    `
    const ImgBox=styled.div`
        width:100%;
        display: flex;
        text-align: start;
    `
    const TextBox=styled.div`
        text-align: start;
    `
    const KuttyBox=styled.div`
       align-items:center 
    `
    const Imag=styled.img`
         padding-top: 20px;
    width:30%;
    ${mobile({marginRight:"20px" })}
    `
    const Title=styled.h3`
          font-size: 26px;
   line-height: 31.2px;
   font-weight: 400;
   padding-top:5%;
   
    `
    const Desc=styled.h4`
        font-size: 20px;
   line-height: 30px;
   font-weight: 400;
    `
 
    
  return (

    <>
        <Container2>
            
           
           
            <TextContainer>
    <Head1>Invoicing & payments</Head1>
    <Text1>Turn your team’s tracked time and expenses into invoices and collect payment quickly with integrated online payments.</Text1>
    <Button1>Start your free trial</Button1>
            </TextContainer>
            <BigImage src={img} />
        </Container2>


        <Cart>
        {data.map((el)=>(
<Box1>
    <KuttyBox>
    <ImgBox>
    <Imag src={el.img} />
    <Title>{el.title}</Title>
   </ImgBox>
    </KuttyBox>
   
       <TextBox>
<Desc>{el.content}</Desc>
       </TextBox>
    </Box1>
        ))}
    </Cart>

   
    </>
   












    
  )
}

export default Invoicing