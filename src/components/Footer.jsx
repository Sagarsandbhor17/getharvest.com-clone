import React from "react";
import styles from "./Footer.module.css";
import harvestlogo from "../kundanmedia/harvest_logo.png";
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';


const Footer = () => {
  return (
   <>
    <div className={styles.fmain}>
      <div className={styles.fmain1}>
      <img src={harvestlogo} alt="" />

      </div>
      <div className={styles.fmain2}>
        <div className={styles.frow1}>
          <h2>Harvest</h2>
          <br/>
          <div className={styles.fh3}>
          <h3>Home</h3>
          <h3>Why Harvest?</h3>
          <h3>Features</h3>
          <h3>Pricing</h3>
          <h3>Integrations</h3>
          <h3>Apps</h3>
          <h3>Security</h3>
          </div>
        </div>

        <div className={styles.frow1}>
        <h2>Community</h2>
        <br/>
          <div className={styles.fh3}>
          <h3>Customer stories</h3>
          <h3>Resources</h3>
          <h3>Webinars</h3>
          <h3>Help & support</h3>
          <h3>Integrate with Harvest</h3>
          <h3>Time Well Spent</h3>
          <h3>Time in This Time</h3>
          </div>
        </div>
        <div className={styles.frow1}>
        <h2>Company</h2>
        <br/>
          <div className={styles.fh3}>
          <h3>About us</h3>
          <h3>Blog</h3>
          <h3>Careers</h3>
          <h3>Legal</h3>
          <h3>Contact us</h3>
          </div>
        </div>

      </div>
    </div>
    {/* We also make: Harvest Forecast – the fast and simple way to schedule your team across projects. */}
    <div className={styles.fmain_1}>
      <div className={styles.part1}>
        <h4>We also make: Harvest Forecast – the fast and simple way to schedule your team across projects.</h4>

      </div>
      <br/>
      <br/>
      <br/>
      <div className={styles.part2}>
        <div className={styles.part2_1}>
          <h3>© 2006-2022 Harvest</h3>
         

        </div>
        <div className={styles.part2_2}>
          <div>
            <h3 className={styles.part2_2_h3}> <BsTwitter/>Twitter </h3>
          </div>
          <div>
            <h3 className={styles.part2_2_h3}><BsLinkedin/> LinkedIn </h3>
          </div>
          <div>
            <h3 className={styles.part2_2_h3}> <BsInstagram/> Instagram</h3>
          </div>

        </div>

      </div>

    </div>

    </>
    
  );
};

export default Footer;
