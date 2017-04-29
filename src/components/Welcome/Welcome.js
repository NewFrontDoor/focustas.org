// @flow
import React from 'react'
import './Welcome.css';

const Welcome = () => (
  <div className="Welcome">
    <div id="logo"></div>

    <div className="jumbotron">
      <h1 className="h1">Welcome <br />
      <span style={{fontSize:'60px',fontWeight:200,fontFamily: 'Raleway, sans-serif'}}>to</span> FOCUS</h1>
      <p>We love to share good things with you at FOCUS, like food, fun, and friendship. Even better, we love to share good news with you about God, who loved you so much He died to save you from this broken world.</p>
      <p>FOCUS stands for the Fellowship of Overseas Christian University Students. But you don't have to be a Christian to come to FOCUS — FOCUS welcomes all international students.</p>
    </div>
    <div id="big_photo"></div>
  </div>
);

export default Welcome;
