import React from 'react';
import styles from "./Trusted.module.css"

const Trusted = () => {
  return (
    <div className={styles.Tmain}>
      <div className={styles.Tmain1}>
        <div className={styles.Tmain1_1}>
          <div className={styles.Tmain1_1img}>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-invest.svg"
              alt=""
            />
          </div>
          <div className={styles.Tmain1_1imgdata}>
            <h4>
            Trusted by thousands of teams worldwide
              <br />
              to have to teach people how to use it as part of onboarding.
              <br />
              Nick Frandsen, Dovetail
            </h4>
          </div>
        </div>
        <div className={styles.Tmain1_2}>
            <h1> Trusted by thousands of teams worldwide</h1>
            <br/>
            <p>
            We’ve been serving teams of all sizes, across all types of

            industries for over 15 years. Today, with more than 70,000
            customers, you can be sure that Harvest will work for your
            team’s unique needs.
            </p>
            <br/>
           
        <p>✔️Flexible timekeeping and invoicing, whether you bill by time or by project</p>
          <p>✔️Scalable one-product-fits-all approach, that can grow with your team</p>
          <p>✔️Intuitive and easy to learn</p>
          
        
          <button>Browse features</button>


        </div>
      </div>
    </div>
  )
}

export default Trusted
