import React, { useState } from "react";
import styles from "./empower.module.css";

import data from "./why_harvest.json";

const Empower = () => {
  const data1 = data.contents;
  console.log(data1);
  return (
    <div className={styles.Emain}>
      <div className={styles.Emain1}>
        <div className={styles.Emain1_1}>
          <h1>
            Empower your team
            with insight
          </h1>
          <p>
            By tracking time and expenses in Harvest, you capture critical
           
            project data that allows you to learn from the past, keep
           
            current projects on track, and better estimate future projects.
          </p>
          {/* ---------------review----------------------- */}
          <br/>
          <br/>
          <p>✔️Review past data to improve how you scope and price work</p>
          <p>✔️Understand which projects are profitable — and why</p>
          <p>✔️Know when to take on new business (or grow your team)</p>

          <br/>
          <br/>
          <button>Browse features</button>
        </div>
        <div className={styles.Emain1_2}>
            <div className={styles.Emain1_2img}>
                <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/why-harvest/why-harvest-reflect.svg" alt="" />

            </div>
            <div className={styles.Emain1_2imgdata}>
                <h4>As a growing business, with Harvest  we get a lot of insights<br/>and intelligence that we couldn’t get before.<br/>Ben Graham, Turnstyle</h4>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
