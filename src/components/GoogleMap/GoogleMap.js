// @flow
import React from 'react';
import './GoogleMap.css';

const API_KEY = "AIzaSyAKlXmkxql5J_iKGqRwReGSn1jUGnA1DHU";

const GoogleMap = ({ query }: { query: string }) => (
  <div className="google-map">
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${query}`}
      className="google-map-item"
      allowFullScreen
    />
  </div>
);

export default GoogleMap;