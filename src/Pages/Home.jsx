import React, { useState } from 'react';
import star from "../kiranmedia/Rate_stars.svg";
import {Alert, AlertIcon, AlertTitle, Box, Button, HStack, Input, SimpleGrid, Stack, Text, VStack} from '@chakra-ui/react';
import "../styles/Home.css"
import { Link, useNavigate } from 'react-router-dom';
import { Learning } from "./HomeComp/Learning";
import { Customers } from './HomeComp/Cutomers';
import { StartTracking } from './HomeComp/StartTracking';

const Home = () => {
const [workEmail,setWorkEmail]=useState(null);
  const [showAlert,setShowAlert]=useState(false);
const navigate=useNavigate()
const onChange=(e)=>{
  setWorkEmail(e.target.value);
console.log(workEmail)
}

const onClick=()=>{
  if(workEmail){
    setShowAlert(false);
    navigate("/signup");
    }
    else if (workEmail===null){
      setShowAlert(true);
    }
}


return <div>

<SimpleGrid columns={[1,1,2]} spacing='20px' width="90%" margin="auto" mt='2rem'>
  <Box>
    <HStack>
      <Box><img src={star} alt='start' /></Box>
      <Box><Text color="black">4.6</Text></Box>
      <Box><Text color="#9F9F9F">(748 reviews)</Text></Box>
    </HStack>
    <Text className='font'>
    Time tracking your team wants to use
    </Text>
    <br/>
    <Text className='subfont'>
    Finally,an easy way to track time across projects.<br/>
    Reports,invoicing,and more.All in just a few clicks.
    </Text>
    <br/>
    <HStack>
      <Input type="email" onChange={onChange}
      focusBorderColor='orangered' borderColor='orangered' placeholder='Work email' width="60%"/>
      <Button colorScheme='none' background='#FA5D00' width='auto' onClick={onClick} >
        Get Started
      </Button>
    </HStack>
    {showAlert&&<Alert bg='none' color='red' >
           <AlertIcon color='red' />
          <AlertTitle>This field can't be empty!</AlertTitle>
              </Alert>}

    <Text textAlign='left' fontWeight='medium' color='#9F9F9F' >Free 30-day trial. No credit card required.</Text>
  </Box>
  <Box>
    <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png" alt="img-break"/>
  </Box>
</SimpleGrid>
<br/>
<HStack width="80%" margin='auto'>
  <Text fontWeight="medium" color="#1D1E1C99">
    <span style={{color:"orangered"}}>70,000+</span> companies track time with Harvest
    </Text>
  <div style={{height:'1px',width:"70%",backgroundColor:"orangered"}}></div>
</HStack>
  <br/>
  <SimpleGrid columns={[4,4,8]} gap="20px" width="95%" margin="auto">
    <Box justifySelf='center' alignSelf='center'>
      <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize' alt="w"/>
      </Box>
    <Box justifySelf='center' alignSelf='center'>
<img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize" alt="ACLU"/>
    </Box>
    <Box justifySelf='center' alignSelf='center'>
      <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize" alt="CONDE NAST"/>
    </Box>
    <Box justifySelf='center' alignSelf='center'>
  <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize" alt="DELL"/>    
    </Box>
    <Box justifySelf='center' alignSelf='center'>
<img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize' alt='ai'/>      
    </Box>
    <Box justifySelf='center' alignSelf='center'>
<img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize' alt='Deloitte'/>      
    </Box>
    <Box justifySelf='center'alignSelf='center'>
<img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize' alt='img-break'/>      
    </Box>
    <Box justifySelf='center'alignSelf='center'>
<img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize' alt='Yale'/>      
    </Box>
  </SimpleGrid>
  <br/>
  <br/>
  <div style={{height:'1px',width:"100%",backgroundColor:"orangered"}}></div>
  <br /><br /><br />

<Box width="90%" margin='auto'>
<Box textAlign='left'>
  <Text color='#FA5D00' fontWeight='bold' fontSize='2xl' >FEATURES</Text>
  <Text fontWeight='md' fontSize='5xl' >Everything you need to keep your team ticking</Text>
  <Text className='subfont' >Time tracking software that helps you keep time and get insights.</Text>
</Box>
<br/>
<SimpleGrid columns={[1,2,2]} gap='10px'>
  <Box width='90%' justifySelf='left'>
    <VStack>
      <HStack gap='10px' className='featBox'>
      <Stack>
        <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-time.svg' alt='ib' /></Stack>
      <Stack className='feat'><Link to='/Features' >
        <Text fontWeight='bold' fontSize='2xl' >Time Tracking</Text>
        <Text fontWeight='medium' fontSize='1xl' >Simple and intuitive time tracking your team will love.</Text>
     </Link> </Stack>
      </HStack>

      <HStack gap='10px' className='featBox'>
      <Stack><img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-reporting.svg' alt='ib' /></Stack>
      <Stack className='feat'>
      <Link to='/Features' >
        <Text fontWeight='bold' fontSize='2xl' >Reports & analysis</Text>
        <Text fontWeight='medium' fontSize='1xl' >Unlock the insights that help your business thrive.</Text></Link>
      </Stack>
      </HStack>

      <HStack gap='10px' className='featBox'>
      <Stack><img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/nav-invoicing.svg' alt='ib' /></Stack>
      <Stack className='feat'>
      <Link to='/Features' >
        <Text fontWeight='bold' fontSize='2xl' >Invoicing & payments</Text>
        <Text fontWeight='medium' fontSize='1xl' >Seamless invoicing and fast online payments.</Text></Link>
      </Stack>
      </HStack>

    </VStack>
  </Box>
  <Box alignSelf='center'>
    <img src='https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png' alt='img=break' />
  </Box>
</SimpleGrid>
<br/>
<Box width='20%'>
<Button width="auto" colorScheme='none' bg='black' padding='1.5rem' ml='2rem' >
<Link to="/Features" >Discover all features</Link>
</Button></Box>
</Box>
<div style={{height:'1px',width:"90%",margin:'auto',marginTop:"3rem",backgroundColor:"orangered"}}></div>
<br/>

<Box width='90%' margin='auto'>
<SimpleGrid columns={[1,1,2]} >
  <Box>
    <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illustrations/integrations-home.svg' alt='ib'/>
  </Box>
  
  <Box textAlign='left' width='80%' alignSelf='center'>
  <Text color='#FA5D00' fontWeight='bold' fontSize='2xl' >INTEGRATIONS</Text>
  <Text fontWeight='md' fontSize='4xl' >Integrated with the tools your team already knows and loves</Text>
  <Text className='subfont' >Your favorite apps work seamlessly with Harvest so you can keep projects on track however you work.</Text>
  
    <br />
<Button colorScheme='none' bg='black' padding='1.5rem' width='auto' >
<Link to="/Integrations" >Browse integrations</Link>
</Button>
</Box>
</SimpleGrid></Box>
<div style={{height:'1px',width:"90%",margin:'auto',marginTop:"3rem",backgroundColor:"orangered"}}></div>
<br/>
<br/>
<Customers/>
<div style={{height:'1px',width:"90%",margin:'auto',marginTop:"3rem",backgroundColor:"orangered",marginBottom:"3rem"}}></div>
<Learning/>
<div style={{height:'1px',width:"100%",margin:'auto',marginTop:"3rem",backgroundColor:"orangered"}}></div>
<StartTracking/>
</div>
}

export default Home

