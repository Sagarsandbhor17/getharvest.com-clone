import React from 'react'
import PricingCompanies from '../components/PricingCompanies'
import PricingFeatures from '../components/PricingFeatures'
import PricingPrice from '../components/PricingPrice'
import PricingQuestions from '../components/PricingQuestions'

const Pricing = () => {
  return (
    <div>
     <PricingPrice/>
     <PricingCompanies/>
     <PricingFeatures/>
     <PricingQuestions/>
    </div>
  )
}

export default Pricing