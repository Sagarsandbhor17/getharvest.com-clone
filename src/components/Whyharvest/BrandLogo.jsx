import { Box, Img, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import styles from "./brandlogo.module.css"

const BrandLogo = () => {
  return (
    <div className={styles.logo}>
         <SimpleGrid columns={[4, 4, 4, 8]} gap="4rem" >
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"/>
            
         </Box>
         <Box gap="6rem" marginTop="4rem" justifyContent="center">
            <Img opacity=".2"  src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"/>
            
         </Box>
         </SimpleGrid>
      
    </div>
  )
}

export default BrandLogo
