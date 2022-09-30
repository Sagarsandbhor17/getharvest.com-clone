import React from 'react'
import styled from 'styled-components'
import {mobile } from "../integration/IntegrationResponsive"
import reports from "./assets/reports.png"

const Reports = () => {
    const img=reports
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg",
            title:"Keep budgets on target",
            content:"Harvest updates budgets as your team tracks time, so you can keep your projects on track and profitable."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg",
            title:"Visualize team capacity",
            content:"See who’s overworked and who’s under-utilized at a glance with capacity reporting."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg",
            title:"Understand costs",
            content:"Keep track of internal costs and review past project data to inform future project scope and estimates."
        },
        {
            id:3,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg",
            title:"Analyze time spent",
            content:"See which projects and tasks are consuming your team’s time and impacting costs."
        },
        {
            id:4,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg",
            title:"Dive into the details",
            content:"Powerful filters give you the detailed data needed to understand where your time goes and plan what’s next."
        },
        {
            id:5,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg",
            title:"Do more with your data",
            content:"It’s easy to export data from Harvest into the reporting tools you already use to gain additional insights."
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
    /* display: flex;
width:100%;
justify-content: space-evenly;
gap:20px;
margin: auto; 
align-items: center;
${mobile({padding : "20px",flexDirection:"column",width:"auto"})} */
flex: 3;
width:80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto; 
  align-items: center;
  gap: 20px;
  /* border: 1px solid black; */
  ${mobile({ gap: "10px",width:"100%",})}
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
width:20%;
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
    width:90%;
border-radius: 16px;
${mobile({width:"100%"})}
    `
  
  return (
    <>
    <Container2>
            
           
           
    <TextContainer>
<Head1>Reports & analysis</Head1>
<Text1>A wide selection of visual reports keep projects running smoothly and your team supported.</Text1>
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
    <Profile src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=563&name=features-quote-2.jpg" />
    </ContBox>
    <BoxText>
    <Boxxx>
    <Quote>"We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation."</Quote>
    <Author>Noah Gedrich</Author>
    <Field>CTO, Zehner</Field>
    </Boxxx>
    </BoxText>
    </Container3>
    </>
       
   
  )
}

export default Reports