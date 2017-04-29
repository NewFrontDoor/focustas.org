// @flow
import React from 'react'
import './About.css';

const About = () => (
  <div id="about" className="parent-component">
    <h2>About us</h2>
    <div className="blurb">
      <div id="icon3"></div>
      <h3>Who we are</h3>
      <p>FOCUS is a Christian international student society of the Tasmanian University Union (TUU) on the Hobart campus of the University of Tasmania. Our society and our staff are also part of the <a target='blank'  href="http://www.afes.org.au">Australian Fellowship of Evangelical Students</a>.</p>
    </div>
    <div className="blurb">
      <h3>What we believe</h3>
      <p>We believe in the historic Christian faith in the Truine God, who is Father, Son, and Holy Spirit, the same faith shared by Christians across time and throughout the world. For this reason, our students and staff come from many different countries and backgrounds and are members of many different Christian churches. You can read our doctrinal statement <a target='blank'  href="http://www.afes.org.au/about/doctrinal-basis">here</a>. </p>
    </div>
    <div className="blurb">
      <h3>The FOCUS Team</h3>
      <p>The FOCUS team is made up of about twenty student leaders and staff, who make everything run smoothly. Our team loves to share God's Good News with students, as all of our student leaders and staff are dedicated Christians and Luke and Sam are theologically trained.</p>
    </div>
    <div className="blurb">
      <div id="Luke" className="team-member"></div>
      <h3>Luke Hansard</h3>
      <p>Luke is a real Tasmanian local and our only full-time staff. He trained at Moore College in Sydney and gives most of the talks and oversees most of the running of FOCUS. Luke is a husband to Jan and father to three young boys. He likes to cook and eat strange things, especially weird meat. He might ask you to try his cooking.</p>
    </div>
    <div className="blurb">
      <div id="Sam" className="team-member"></div>
      <h3>Sam Gough</h3>
      <p>Sam is a graduate of the University of Tasmania, Sydney Missionary Bible College and Moore College. Having trained and worked as a doctor, he made the switch from medicine to FOCUS. Sam is married to Beck and has two young kids, Henry and Phoebe. He loves Maccas, cheap instant coffee and wearing trackies.</p>
    </div>
  </div>
);

export default About;
