import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Integration from "../Pages/Integration"
import LoginSignup from "../Pages/LoginSignup"
import Pricing from "../Pages/Pricing"
export const Allroute =()=>{
return<div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Why-Harvest" element={<h1>Why Harvest</h1>}/>
<Route path="/Features" element={<h1>Features</h1>}/>
<Route path="/Customers" element={<h1>Customers</h1>}/>
<Route path="/Integrations" element={<Integration />}/>
<Route path="/Pricing" element={<Pricing/>}/>
<Route path="/signin" element={<LoginSignup/>}/>
<Route path="/signup" element={<h1>Sign Up</h1>}/>

</Routes>
    </div>
}