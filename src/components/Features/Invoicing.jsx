import { Button } from '@chakra-ui/react'
import React from 'react'
import invoices from "./assets/invoices.png"
import style from "./invoicing.module.css"

const Invoicing = () => {

    const img=invoices
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-invoice.svg",
            title:"Streamline your invoicing",
            content:"Easily create and send accurate invoices using your team’s time and expenses already tracked in Harvest."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-payments.svg",
            title:"Get paid fast with online payments",
            content:"PayPal and Stripe integrations let your clients quickly and conveniently pay invoices online."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-books.svg",
            title:"Keep your books up to date",
            content:"Automatically copy your Harvest invoices and payments to QuickBooks Online or Xero for simplified accounting."
        }
    ]
  return (
    <div>
        <div className={style.timetrackingContainer}>
        <div className={style.timetrackingBox1}>
        <h3>Invoicing & payments</h3>
        <div className={style.box1text}>
            <h3>Turn your team’s tracked time and expenses into invoices and collect payment quickly with integrated online payments.</h3>
        </div>
        <Button  colorScheme='orange' size='lg'>
   Start your free trial
  </Button>
        </div>
        <div className={style.timetrackingBox2}>
<img src={img} alt="time"/>
        </div>
        </div>
        {/* container2 */}
        <div className={style.container2}>
        {data.map((el)=>(
<div className={style.timetrackingContainer2}>
   
       
        <div className={style.container2box1}>
            <div className={style.container2box1img}>
        <img src={el.img} alt="clock" />
        </div>
        <div className={style.container2box1text}>
        <h3 >{el.title}</h3>
        </div>
    </div>
    <div className={style.container2box2}>
        
        <h4>{el.content}
    
    </h4>
    </div>
  
  
  

</div>
  ))}
</div>
 {/* container2 */}
 {/* container3 */}
 <div className={style.container3}>
<div className={style.container3box1}>
<h3>Start tracking time today</h3>
        <div className={style.container3box1text}>
            <h3>Join 70,000+ companies spending their time wisely with Harvest.</h3>
        </div>
        <div className={style.container3innerbox}>
        <Button   borderRadius={16} colorScheme='orange' size='md' mr={5}>
   Start your free trial
  </Button>
  <h3>Free 30-day trial. No credit card required.</h3>
  </div>
</div>
<div className={style.container3box2}>
<img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="lap" />
</div>
 </div>
    </div>
  )
}

export default Invoicing