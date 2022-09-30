
import React from 'react'
import PricingCompanies from '../components/PricingCompanies'
import PricingFeatures from '../components/PricingFeatures'
import PricingPrice from '../components/PricingPrice'
import PricingQuestions from '../components/PricingQuestions'
import { Slide } from '../components/Slide'

const Pricing = () => {
  return (
    <div>
     <PricingPrice/>
     <PricingCompanies/>
     <PricingFeatures/>
     <PricingQuestions/>
     <Slide/>
    </div>
  )
}

export default Pricing