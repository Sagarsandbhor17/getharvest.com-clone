import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Integration from "../Pages/Integration"
import LoginSignup from "../Pages/LoginSignup"
import Pricing from "../Pages/Pricing"
import Signup from "../Pages/Signup"
import WhyHarvest from "../Pages/WhyHarvest"
import Customers from "./Customers/Customers"
import Features from "./Features/Features"

export const Allroute =()=>{
return<div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Why-Harvest" element={<WhyHarvest/>}/>
<Route path="/Features" element={<Features/>}/>
<Route path="/Customers" element={<Customers />}/>
<Route path="/Integrations" element={<Integration />}/>
<Route path="/Pricing" element={<Pricing/>}/>
<Route path="/signin" element={<LoginSignup/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>
    </div>
}