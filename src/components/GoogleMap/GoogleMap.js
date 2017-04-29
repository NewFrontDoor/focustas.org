// @flow
import React from 'react';

const API_KEY = "AIzaSyAKlXmkxql5J_iKGqRwReGSn1jUGnA1DHU";

const GoogleMap = ({ query }: { query: string }) => (
  <iframe
    src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${query}`}
    allowFullScreen
    width="400"
    height="300"
    frameBorder="0"
    style={{border:0,paddingLeft:"0px"}}
  />
);

export default GoogleMap;