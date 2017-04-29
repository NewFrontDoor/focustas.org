// @flow
import React from 'react'
import styles from './Events.css';

const Events = () => (

<div id="events" className="parent-component">
  <h2>Events</h2>
  <div className="blurb">
    <div id="icon"></div>
    <h3>Friday Night FOCUS</h3>
    <ul>
      <li><b>What:</b> FREE dinner, activities, and talk.</li>
      <li><b>When:</b> Fridays 6.00–8.30pm.</li>
      <li><b>Where:</b> Sandy Bay Baptist Church, 239 Sandy Bay Road. <a href='#mapChurch'>(See map)</a></li>
    </ul>
    <p>Join us every Friday during semester to eat, sing, pray, play, and learn from the Bible. We share a meal together and then have a church style meeting. Everything is run to help people who have never been to church feel comfortable. It's a great place to practice English, make friends, experience different cultures, and learn about God's will for your life.</p>
  </div>
  <div className="blurb">
    <div id="Photo_4"></div>
    <h3>The Good Life studies</h3>
    <ul>
      <li><b>What:</b> A short course to learn how to live God's good life.</li>
      <li><b>When:</b> You can choose!</li>
      <li><b>Where:</b> Wellspring Church. <a href='#mapHQ'>(See map)</a></li>
    </ul>
    <p>Do you want a good life? Do you want to hear what the Bible teaches about this subject? Read the Bible, find answers and enjoy some discussion.</p>
  </div>
  <div className="blurb">
    <h3>One-to-One</h3>
    <ul>
      <li><b>What:</b> Meet one-to-one with a FOCUS team member.</li>
      <li><b>When + Where:</b> You decide.</li>
    </ul>
    <p>A FOCUS team member would love to meet one-to-one to talk about your life or study the Bible. This is a great way to learn about God and ask any questions you might have, no matter how silly you think they are!</p>
  </div>
  <div className="blurb">
    <div id="iconRow"></div>
    <h3>Small group</h3>
    <ul>
      <li><b>What:</b> Study the Bible in a group.</li>
      <li><b>When:</b> Wednesdays 7.00-8:30pm.</li>
      <li><b>Where:</b> Wellspring Church. <a href='#mapHQ'>(See map)</a></li>
    </ul>
    <p>Our small group is an excellent way for Christians to discover move about what we learn at Friday Night FOCUS. Our group will mature and encourage you in your faith.</p>
  </div>
  <div className="blurb">
    <h3>LIMBS</h3>
    <ul>
      <li><b>What:</b> Study the Bible with medical students.</li>
      <li><b>When + Where:</b> Varies week to week.</li>
    </ul>
    <p>For medical students, we offer LIMBS - Lunchtime International Medics Bible Study. Our LIMBS groups work like our other small groups, except that LIMBS is especially designed to suit the schedule and needs of medical students.</p>
  </div>
</div>

);

export default Events;
