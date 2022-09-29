import { Button } from '@chakra-ui/react'
import React from 'react'
import timesheets from "./assets/timesheets.png"
import style from "./timetracking.module.css"
const Timetracking = () => {
    const img=timesheets
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg",
            title:"Track time from browser, desktop, and mobile",
            content:"Make it as easy as possible for your team to capture their time with dedicated apps across devices."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg",
            title:"Integrated with your workflow",
            content:"Harvest integrates with the tools your team knows and loves — capture time the way your team already works."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg",
            title:"Custom reminders for consistent time tracking",
            content:"Create automated reminders to help your team track time regularly and accurately."
        }
    ]
  return (
    <div>
        <div className={style.timetrackingContainer}>
        <div className={style.timetrackingBox1}>
        <h3>Time tracking</h3>
        <div className={style.box1text}>
            <h3>An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</h3>
        </div>
        <Button variant="solid" colorScheme='orange' size='lg'>
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
<img src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=563&name=features-quote-1.jpg" alt="img" />
</div>
<div className={style.container3box2}>
<div className={style.container3box2text}>
<h3>"Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients."</h3>
<h4>Genevieve Laing</h4>
<h5>Director of Engineering, Cooper Perkins</h5>
</div>
</div>
 </div>
    </div>
  )
}

export default Timetracking