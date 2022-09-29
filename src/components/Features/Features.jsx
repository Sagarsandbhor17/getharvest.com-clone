import React from 'react'
import { Box, Heading, HStack, Stack, Image, Divider } from '@chakra-ui/react'
import style from "./feature.module.css"
import Timetracking from './Timetracking'



const Features = () => {
    const data=[
       { id:0,
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg",
        name:"Time tracking",
       },
       { id:1,
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg",
        name:"Reports & Analysis",
       },
       { id:2,
        img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg",
        name:"Invoicing & payments",
       },
       

    ]
  return (
  
    <div className={style.feature}>
    <div className={style.featureheader}>
        <Stack spacing="-20px">
 
  <Heading  fontSize="50px" lineheight="60px" fontWeight="400">
  Everything your team needs to keep ticking
  </Heading>
  <Heading  fontSize="29px" lineheight="37.7px" fontWeight="400">
  Intuitive time tracking and powerful insights that help your team thrive.
  </Heading>
  </Stack>
{/* cart */}
 <div className={style.featurecart}>
    {data.map((el)=>(<div className={style.featureheaderbox}>
    <div className={style.img}>
  <Image
  borderRadius='full'
 
  src={el.img}
  alt='timer'
/>
</div>
<div className={style.flexbox}>
<h3 >{el.name}</h3>
    <img src="	https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/arrow-down-24.svg" width="24px" alt="arrowdown" />


</div>
</div>))}
  
</div>
{/* cart */}
<Divider orientation='horizontal' color="red"/>
</div>
{/* featureheader */}
<Timetracking />
</div>

  
  
   
  )
}

export default Features