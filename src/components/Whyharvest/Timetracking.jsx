import React from "react";
import styles from "./timetracking.module.css";

const Timetracking = () => {
  return (
    <div className={styles.Tmain}>
      <div className={styles.Tmain1}>
        <div className={styles.Tmain1_1}>
          <div className={styles.Tmain1_1img}>
            <img
              src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-keep.svg"
              alt=""
            />
          </div>
          <div className={styles.Tmain1_1imgdata}>
            <h4>
              We needed something super simple because we don’t want
              <br />
              to have to teach people how to use it as part of onboarding.
              <br />
              Nick Frandsen, Dovetail
            </h4>
          </div>
        </div>
        <div className={styles.Tmain1_2}>
            <h1>Time tracking that works the way your team works</h1>
            <br/>
            <p>
            Time tracking software is only useful if it’s actually used. That’s

            why we designed Harvest to be easy to adopt, integrated with
            your favorite apps, and flexible enough for all types of teams.
            </p>
            <br/>
            <br/>
        <p>✔️Integrated with the tools your team already knows and loves</p>
          <p>✔️Track time wherever you work - desktop, browser, and mobile</p>
          <p>✔️Intuitive and easy to learn</p>
          <br/>
        
          <button>Browse features</button>


        </div>
      </div>
    </div>
  );
};

export default Timetracking;
