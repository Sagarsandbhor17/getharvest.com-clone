import React from 'react'
import timesheets from "./assets/timesheets.png"
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"

const Timetracking = () => {
    const img=timesheets
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg",
            title:"Track time from browser, desktop, and mobile",
            content:"Make it as easy as possible for your team to capture their time with dedicated apps across devices."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg",
            title:"Integrated with your workflow",
            content:"Harvest integrates with the tools your team knows and loves — capture time the way your team already works."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg",
            title:"Custom reminders for consistent time tracking",
            content:"Create automated reminders to help your team track time regularly and accurately."
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
    const Container3=styled.div`
    width:80%;
    display: flex;
    margin:auto;
align-items: center;
       border:1px solid #fff8f1; 
      height:auto;
      padding-top: 5%;
      padding-bottom: 5%;
      padding-right: 5%;
      padding-left:5%;
      ${mobile({padding : "20px",flexDirection:"column",})}
    `
    const ContBox=styled.div`
    width:30%
       `
       const BoxText=styled.div`
       width:70%;
    padding-left: 20px;
  padding-top:10%;
       `
       const Boxxx=styled.div`
     
    text-align: start;
       `
       const Quote=styled.h3`
       font-size: 30px;
    line-height: 45px;
    font-weight: 400;
       `
       const Author=styled.h4`
       font-size: 20px;
    line-height: 28px;
        `
        const Field=styled.h5`
        font-size: 20px;
 
   font-weight: 600;
   line-height: 28px;
   
        `
        const Profile=styled.img`
        width:100%;
    border-radius: 16px;
    ${mobile({width:"100%"})}
        `
  return (

   <>
        <Container2>
            
           
           
            <TextContainer>
    <Head1>Time tracking</Head1>
    <Text1>An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</Text1>
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

    <Container3>
    <ContBox>
    <Profile src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg" />
    </ContBox>
    <BoxText>
    <Boxxx>
    <Quote>"Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients."</Quote>
    <Author>Genevieve Laing</Author>
    <Field>Director of Engineering, Cooper Perkins</Field>
    </Boxxx>
    </BoxText>
    </Container3>
    </>
   
      )
        }
    
    export default Timetracking
