// @flow
import React from 'react'
import styles from './Where.css';

const Where = () => (
  <div id="where">
    <h2>Where we meet</h2>
    <div className="blurb">
      <div id="icon"></div>
      <div id="map">
        <p>We meet for Friday night FOCUS at Sandy Bay Baptist Church.<br /></p>
        <div id="mapChurch">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.56594245111654!2d147.32799060615872!3d-42.89603165170423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6ddf5fc4241f97%3A0xdf041500f6d84333!2sSandy+Bay+Baptist+Church!5e1!3m2!1sen!2s!4v1426571125517" width="400" height="300" frameborder="0" style={{border:0,paddingLeft:"0px"}}> </iframe>
        </div>
        <p> We meet for small groups and some special events at Wellspring Church.</p>
        <div id="mapHQ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.102078677389!2d147.3264208604007!3d-42.89906897834159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6ddf5ecddc2c71%3A0x1703445f123675b!2sWellspring+Anglican!5e1!3m2!1sen!2s!4v1426571237876"  width="400" height="300" frameborder="0" style={{border:0,paddingLeft:'0px'}}></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default Where;
