import { Box, Heading, Stack,Text,Image, Button } from '@chakra-ui/react'
import React from 'react'
import style from "./customers.module.css"
const Customers = () => {
    const data=[
        { id:0,
         img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg",
         count:"70,000+",
         name:"customers",
        },
        { id:1,
         img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg",
         count:"2 billion",
         name:"hours tracked",
        },
       
        { id:2,
         img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg",
         count:"19.6 million",
         name:"invoices paid",
        },
        
 
     ]
     const imgData=[
        { id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize",
            
           },
           { id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize",
           
           },
          
           { id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize",
            
           },
           { id:3,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize",
            
           },
           { id:4,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize",
           
           },
          
           { id:5,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize",
            
           },
           { id:6,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize",
            
           },
     ]
  return (
    <div className={style.customer}>
   
        
        <Box  width ='100%'
    height= "auto"
    backgroundColor= '#fff8f1'
   
    textAlign= "start">
        <Stack spacing="-20px">
 
  <Heading  fontSize="50px" lineheight="60px" fontWeight="400">
  See how Harvest helps teams like yours thrive
  </Heading>
  <Heading  fontSize="29px" lineheight="37.7px" fontWeight="400">
  Teams of all sizes, across industries, and around the world track time with Harvest.
  </Heading>
  </Stack>
  </Box>
 
  {/* cart */}
<Box width="100%"
    display="flex"
    marginTop="50px">
    {data.map((el)=>(<Box    width="40%"
   border="1px solid orange "
   display= "flex"
   borderLeft= "none">
    <Box  width="70%"
    alignItems= "flex-start">
<Text  fontSize= " 42px"
    lineHeight= "42px"
    fontWeight= "400">{el.count}</Text>
<Text fontSize= " 26px"
    lineHeight= "26px"
    fontWeight= "400" marginTop= "-30px">{el.name}</Text>
    </Box>
<Box >
<Image  width="90%" paddingTop= "40%" src={el.img} alt="im" />
</Box>
</Box>))}
  </Box>
{/* container2 */}

<Box width="100%"
    display= "flex" 
    paddingTop="5%"
      height="auto"
      paddingBottom= "5%">
<Box width="50%">
<Image  width="100%" borderRadius="16px" src="https://www.getharvest.com/hubfs/customer-profile.jpg" alt="profile" />
</Box>
<Box width="50%" >
<Box textAlign="start" paddingLeft="20px">
<Text   fontSize="20px" 
    lineHeight="20px"
    fontWeight="bold" color="#fa5d00" >FEATURED STORY</Text>
<Text  fontSize="29px" 
    lineHeight="37px">Startup studio Dovetail tracks time with Harvest to build trust with clients.</Text>
<Button backgroundColor="black" color="white" borderRadius="16px"  fontSize="20px" 
    lineHeight="20px" padding={10}>Read customer story</Button>
</Box>
</Box>
 </Box>
 {/* container2 */}
{/* container3 */}
<Box>
    <Box display="flex" justifyContent="space-between">
        {imgData.map((el)=>(
             <Image  
             src={el.img} alt="profile" />))}
   
    
    </Box>
</Box>
  </div>
 
  )
}

export default Customers