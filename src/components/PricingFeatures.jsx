import React from 'react'
import "../styles/PricingFeatures.css"

const data = [{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/time-tracking.svg",
    title: "Time Tracking",
    descp: "Start and stop tracking with 1-click. Apps for desktop, mobile, and web browser."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459455/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reminders.svg",
    title: "Reminders",
    descp: "Subtle reminders to track time. Never lose another hour."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Invoicing.svg",
    title: "Invoicing",
    descp: "Automatically create invoices from tracked time and expenses."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Online-Payments.svg",
    title: "Online Payments",
    descp: "Accept online payments. Sync with QuickBooks and Xero."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Reporting.svg",
    title: "Reporting",
    descp: "Create reports across projects. Budgets, time, team capacity, cost breakdowns, etc."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Integrations.svg",
    title: "Integrations",
    descp: "Integrate with 50+ apps including Asana, Basecamp, Trello, Slack, and more."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Budgets.svg",
    title: "Budgets",
    descp: "Monitor project budgets. Get early alerts when projects take longer than budgeted."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459456/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Cost-Tracking.svg",
    title: "Cost Tracking",
    descp: "See how much every project costs to complete. Drill down into details."
},
{
    img:"https://res.cloudinary.com/spiralyze/image/upload/v1655459453/Harvest/4006-Harvest-Time-Tracking-LP-Feature-Grid/Expenses.svg",
    title: "Expenses",
    descp: "Add project expenses in just a few clicks. Easily attach photos of receipts."
}]
const PricingFeatures = () => {
  return (
    <div className='features_main_cointainer'>
              <h1>Features</h1>
              <div className='features_grid_div'>

        {data.map((items)=>{
            return (
                <div className='feauters_data_div' key={items.title}>
                    <div>
                        <img src={items.img} alt="" />
                    </div>
                    <div>
                        <h1>{items.title}</h1>
                    </div>
                    <div>
                        <h5>{items.descp}</h5>
                    </div>
                </div>
            )
        })}
             </div>
    </div>
  )
}

export default PricingFeatures