import React from 'react';
import BrandLogo from '../components/Whyharvest/BrandLogo';
import Empower from '../components/Whyharvest/Empower'
import { Helpteam } from '../components/Whyharvest/Helpteam'
import Keep from '../components/Whyharvest/Keep'
import Timetracking from '../components/Whyharvest/Timetracking'
import Trusted from '../components/Whyharvest/Trusted'
const WhyHarvest = () => {
  return (
    <div>
      <Helpteam/>
    <Empower/>
    <Timetracking/>
    <Keep/>
    <Trusted/>
    <BrandLogo/>
    </div>
  )
}

export default WhyHarvest
