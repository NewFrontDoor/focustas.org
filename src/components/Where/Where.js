// @flow
import React from 'react'
import GoogleMap from '../GoogleMap/GoogleMap';
import './Where.css';
import Blurb from '../Blurb/Blurb';

const Where = () => (
  <div id="where" className="parent-component">
    <h2>Where we meet</h2>
    <div id="icon"></div>
    <Blurb>
      <div id="map">
        <p>We meet for Friday night FOCUS at Sandy Bay Baptist Church.<br /></p>
        <div id="mapChurch">
          <GoogleMap query="Sandy+Bay+Baptist+Church" />
        </div>
        <p> We meet for small groups and some special events at Wellspring Church.</p>
        <div id="mapHQ">
          <GoogleMap query="Wellspring+Anglican,+43-47+Grosvenor+St,+Sandy+Bay+TAS+7005" />
        </div>
      </div>
    </Blurb>
  </div>
);

export default Where;
