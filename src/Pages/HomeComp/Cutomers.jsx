import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Customers=()=>{
    return <div>
        
<Box width="90%" margin='auto' textAlign='left'>
  <Text fontWeight='bold' color='#FA5D00' fontSize='2xl' >CUSTOMER STORIES</Text><br/>
  <Text className='font'>Helping teams thrive since 2006</Text><br/>
  <Text className='subfont'>Teams of all sizes, types, and industries trust Harvest to track their time.</Text>
<br/>
<SimpleGrid columns={[1,1,2]} >
  <Box borderLeft='1px solid orangered' borderRight='1px solid orangered' padding='1rem'lineHeight='50px'>
    <Text fontSize='2.3rem'>
      <span style={{color:"orangered",fontSize:"3rem",fontStyle:"italic"}}>"</span>
      We really focus on work-life balance in remote work… Time<br/> tracking reveals if somebody is overburdened and that becomes an immediate conversation.
      <span style={{color:"orangered",fontSize:"3rem",fontStyle:"italic" }}>"</span>
    </Text>
    <Text color='black' fontWeight='medium' fontSize='2xl' >Noah Gedrich, Zehner</Text><br/>
<Button colorScheme='none' bg='black' padding='1.5rem' >
<Link to="/Customers" >Meet our customers</Link>
</Button>
  </Box>
  <Box borderRight='1px solid orangered' borderLeft='1px solid orangered' padding='1rem' alignSelf='center'>
    <img src='https://www.getharvest.com/hs-fs/hubfs/homepage/home-photo-zehner.jpg?width=560&height=374&name=home-photo-zehner.jpg' alt='ib'/>
  </Box>
</SimpleGrid>
</Box>
    </div>
}