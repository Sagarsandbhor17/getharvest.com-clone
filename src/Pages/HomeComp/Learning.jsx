import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import "../../styles/Home.css"

export const Learning=()=>{
    
return<div>
<Box width='90%' margin='auto'>
  <SimpleGrid columns={[1,1,2]}>
    <Box alignSelf='center' textAlign='left'>
    <Text fontWeight='bold' color='#FA5D00' fontSize='2xl' >LEARNING RESOURCES</Text><br/>
  <Text className='font'>Supporting your team along the way</Text><br/>
    </Box>

    <Box>
      <VStack>
      <HStack gap='10px' className='featBox'>
      <Stack><img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-folder.svg' alt='ib' /></Stack>
      <Stack className='feat'>
        <Text fontWeight='bold' fontSize='2xl' >Guides and templates</Text>
        <Text fontWeight='medium' fontSize='1xl' >Learn how to introduce your team to time tracking and make the most of Harvest.</Text>
      </Stack>
      <Stack>
     <ArrowForwardIcon w={8} h={8} color='orangered' />
      </Stack>
      </HStack>

      <HStack gap='10px' className='featBox'>
      <Stack><img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-laptop.svg' alt='ib' /></Stack>
      <Stack className='feat'>
        <Text fontWeight='bold' fontSize='2xl' >Webinars</Text>
        <Text fontWeight='medium' fontSize='1xl' >Watch a quick intro to Harvest or sign up for a live session with one of our Experts.</Text>
      </Stack>
      <Stack>
     <ArrowForwardIcon w={8} h={8} color='orangered' />
      </Stack>
      </HStack>

      <HStack gap='10px' className='featBox'>
      <Stack><img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/homepage/illo-75-help.svg' alt='ib' /></Stack>
      <Stack className='feat'>
        <Text fontWeight='bold' fontSize='2xl' >Help Center</Text>
        <Text fontWeight='medium' fontSize='1xl' >Find the answers to all your questions or get in touch with one of our friendly Experts.</Text>
      </Stack>
      <Stack>
     <ArrowForwardIcon w={8} h={8} color='orangered' />
      </Stack>
      </HStack>

      </VStack>

    </Box>

  </SimpleGrid>
</Box>

    </div>
}