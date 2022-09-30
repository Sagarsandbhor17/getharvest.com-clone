import React, { useState } from 'react'
import "../styles/Pricing.css"
import { Switch } from '@chakra-ui/react'


const PricingPrice = () => {
  const [toggle , setToggle] = useState(false)
  

  return (
    <div className='price_main_container'>

         <div className='price_top_div'>
            <h1>Pricing</h1>
            <div className='price-toggle_div'>
                 <h5>Monthly</h5>
                 <Switch size='lg' colorScheme='orange' onClick={()=>{setToggle(!toggle)}} />
                 <h5>Annual</h5>
            </div>
            <p>Save 10% with annual plan</p>
         </div>


         <div className='price_bottom_div'>
              <div >
                  <div className='heading_div'>
                         <div className='price_heading_div'>
                             <h1>Free</h1>
                             <p>1 seat</p>
                             <p>projects</p>
                         </div>
                         <div className='price_mentioned_div'>
                            <h5>
                            $0
                            </h5>
                            <h6>
                              forever
                            </h6>
                         </div>
                  </div>
                  <div className='button_div'>
                       <button>30 days free trail</button>
                        <h6>
                        No credit card required.
                        </h6>
                  </div>
              </div>
             {/* div split */}

              <div >
                  <div className='heading_div'>
                         <div className='price_heading_div'>
                             <h1>Pro</h1>
                             <p>Unlimited seats</p>
                             <p>Unlimited projects</p>
                         </div>
                         <div className='price_mentioned_div'>
                            <h5>
                            {toggle ? "$15" : "$12"}
                            </h5>
                            <h6>
                              per seat per month
                            </h6>
                         </div>
                  </div>
                  <div className='button_div'>
                       <button>30 days free trail</button>
                        <h6>
                        No credit card required.
                        </h6>
                  </div>
              </div>
   
         </div>
    </div>
  )
}

export default PricingPrice