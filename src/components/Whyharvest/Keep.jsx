import React from 'react'
import styles from "./keep.module.css";

const Keep = () => {
  return (
    <div className={styles.Emain}>
      <div className={styles.Emain1}>
        <div className={styles.Emain1_1}>
          <h1>
          Keep your projects on track
          </h1>
          <br/>
          <p>
          Harvest provides visibility into the key aspects of your projects
           
          —budget, team capacity, and costs—enabling you to keep
           
          everything on time and on budget.
          </p>
          {/* ---------------review----------------------- */}
          <br/>
          <br/>
          <p>✔️Clear visual reports allow you to compare actual time vs. budget</p>
          <p>✔️Get more accurate timesheet and cost data</p>
          <p>✔️Pinpoint which tasks are impacting costs</p>

          <br/>
          <br/>
          <button>Browse features</button>
        </div>
        <div className={styles.Emain1_2}>
            <div className={styles.Emain1_2img}>
                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-track.svg" alt="" />

            </div>
            <div className={styles.Emain1_2imgdata}>
                <h4>We can see if a project is in danger of going off track and<br/>course-correct way before it actually becomes a problem.<br/>Michael Kucera, Zehner</h4>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Keep
