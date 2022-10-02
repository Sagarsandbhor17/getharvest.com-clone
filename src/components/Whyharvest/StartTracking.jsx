import React from 'react';
import styles from "./startTracking.module.css"

const StartTracking = () => {
  return (
    <div className={styles.main}>
        <div className={styles.main_1}>
            <h1>Start tracking time today</h1>
            <h3>Join 70,000+ companies spending their time

            wisely with Harvest.
            </h3>
            <br/>
          
            <div className={styles.btn}>
            <button className={styles.btnTry}>Try Harvest Free</button>
            <p>Free 30-day trial. No credit card required.</p>

            </div>

           

        </div>
        <div className={styles.main_2}>
       

        </div>
      
    </div>
  )
}

export default StartTracking
