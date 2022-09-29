import React from 'react'
import style from "./reports.module.css"
import reports from "./assets/reports.png"
const Reports = () => {
    const img=reports
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
        <div className={style.reportContainer}>
        <div className={style.reportBox1}>
        <h3>Reports & analysis</h3>
        <div className={style.box1text}>
            <h3>An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</h3>
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
    </div>
  )
}

export default Reports