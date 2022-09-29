import React from 'react'
import style from "./reports.module.css"
import reports from "./assets/reports.png"
import { Button } from '@chakra-ui/react'
const Reports = () => {
    const img=reports
    const data=[
        {
            id:0,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-budget.svg",
            title:"Keep budgets on target",
            content:"Harvest updates budgets as your team tracks time, so you can keep your projects on track and profitable."
        },
        {
            id:1,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-capacity.svg",
            title:"Visualize team capacity",
            content:"See who’s overworked and who’s under-utilized at a glance with capacity reporting."
        },
        {
            id:2,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-costs.svg",
            title:"Understand costs",
            content:"Keep track of internal costs and review past project data to inform future project scope and estimates."
        },
        {
            id:3,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-analyze.svg",
            title:"Analyze time spent",
            content:"See which projects and tasks are consuming your team’s time and impacting costs."
        },
        {
            id:4,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-details.svg",
            title:"Dive into the details",
            content:"Powerful filters give you the detailed data needed to understand where your time goes and plan what’s next."
        },
        {
            id:5,
            img:"https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-data.svg",
            title:"Do more with your data",
            content:"It’s easy to export data from Harvest into the reporting tools you already use to gain additional insights."
        }
    ]
  
  return (
    <div>
        <div className={style.reportContainer}>
        <div className={style.reportBox1}>
        <h3>Reports & analysis</h3>
        <div className={style.box1text}>
            <h3>A wide selection of visual reports keep projects running smoothly and your team supported.</h3>
        </div>
        <Button  colorScheme='orange' size='lg'>
   Start your free trial
  </Button>
        </div>
        <div className={style.reportBox2}>
<img src={img} alt="time"/>
        </div>
        </div>
        {/* container2 */}
        <div className={style.container2}>
        {data.map((el)=>(
<div className={style.reportContainer2}>
   
       
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
<img src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-2.jpg?width=563&name=features-quote-2.jpg" alt="img" />
</div>
<div className={style.container3box2}>
<div className={style.container3box2text}>
<h3>"We really focus on work-life balance in remote work… Time tracking reveals if somebody is overburdened and that becomes an immediate conversation."</h3>
<h4>Noah Gedrich</h4>
<h5>CTO, Zehner</h5>
</div>
</div>
 </div>
    </div>
   
  )
}

export default Reports