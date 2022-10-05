import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const StartTracking=()=>{
    return<div style={{backgroundColor:"white",paddingTop:"3rem",paddingBottom:"3rem"}}>
        <Box width='90%' alignSelf='center' margin="auto" textAlign='left' padding="1rem">
            <SimpleGrid columns={[1,1,2]}>
                <Box>
                    <Text fontSize='5xl' fontWeight='medium' color='black' >Start tracking time today</Text>
                    <Text width='90%' fontSize="2xl" fontWeight='medium' color="gray" >Join 70,000+ companies spending their time wisely with Harvest.</Text>
                   <br/>
                   <HStack>
                   <Button background='#FA5D00' colorScheme="none" width="70%">
                            <Link to="/signup"><Text fontWeight="bold">Try Harvest Free</Text></Link>
                        </Button>
                        <Text fontWeight='sm' color="gray">Free 30-day trial. No credit card required.</Text>

                        </HStack>
                </Box>
                <Box justifySelf='center' padding='1rem'>
                    <img src='https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg' alt='ib'/>
                </Box>
            </SimpleGrid>

        </Box>
    </div>
}