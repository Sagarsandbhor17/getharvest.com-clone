import React from 'react'
import "../styles/PricingQuestions.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
  } from '@chakra-ui/react'

const PricingQuestions = () => {
  return (
    <div className='question_main_container'>
        <div className='questions_heading'>
            <h1>Frequently asked questions</h1>
        </div>
        <div className='questions_div'>
        <Accordion allowToggle>
  <AccordionItem borderTop="1px solid orangered" p="10px">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Text>How do i signup for the free plan?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderTop="1px solid orangered" p="10px">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Text>What happen at the end of my trail?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem borderTop="1px solid orangered" p="10px">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Text>Does my team qualify for anyone?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem borderTop="1px solid orangered" p="10px">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Text>What are our payment option?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem borderTop="1px solid orangered" p="10px">
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        <Text>Can we switch our billing frequency?</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
 </Accordion>
        </div>
    </div>
  )
}

export default PricingQuestions