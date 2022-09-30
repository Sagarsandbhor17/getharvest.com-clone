import React from 'react'
import styled from 'styled-components';
import {mobile } from "../integration/IntegrationResponsive"

const LogosContainer=styled.div`
width:100%;
    margin-left:5%;
    padding-left:5%;
    ${mobile({width:"200%" })}
`
const Image=styled.img`
    width:100%;
    
`
const Customerlogos = () => {
  return (
    <LogosContainer>
    <Image src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/Test-3001-free-trial-spz-baseline/social-proofs_2x.png" alt="img404"/>
 </LogosContainer>
  )
}

export default Customerlogos