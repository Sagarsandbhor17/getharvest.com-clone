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
    When your trial account meets the free plan’s requirements, 
    you can sign up for the free version during the upgrade process.
    On the Upgrade Your Harvest Plan page, click the switch to the free version link below the plan options.
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
    You can upgrade to a paid plan any time during your 30-day trial period. If you haven’t upgraded at the end of 30 days, your trial account will be automatically deactivated.
    We don’t collect credit card info when you start a trial, so you don’t need to worry about being charged.
Even though your trial account will be deactivated, we won’t delete your data.
If you ever want to try Harvest again in the future, your data will be waiting for you.
If you’re looking to switch to the free plan, you can do that any time during your trial as well. You’ll see that option during the upgrade process as long as your account meets the free plan’s requirements.
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
    Yes! When you pay for the year up front, you get a 10% discount that’s automatically applied to your account.
We also offer discounts upon request to teams of 50+ people, nonprofits, schools and universities, educators using Harvest in a classroom setting, and students.
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
    You can pay for Harvest via credit card either monthly or yearly.
    If you pay for the year in advance, you’ll get a 10% discount on your bill!
If you have 10 or more seats and pay for the year in advance,
you can also request an invoice when you upgrade and pay for your subscription via check or bank transfer.
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
    If you’re paying monthly, you can switch to yearly payment at any time (and you’ll receive a 10% discount for doing so!).
If you paid for the year in advance, you can switch to monthly payment at the end of your current yearly billing cycle, but keep in mind that the 10% discount will be removed.
To make the change, reach out to our support team during the month before your renewal.
    </AccordionPanel>
  </AccordionItem>
 </Accordion>
        </div>
    </div>
  )
}

export default PricingQuestions