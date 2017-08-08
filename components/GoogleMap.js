// @flow
import React from 'react';
import { createComponent } from 'react-fela';

const MapContainer = createComponent(() => ({
  position: 'relative',
  display: 'block',
  width: '100%',
  padding: '0',
  overflow: 'hidden',
  paddingBottom: '50vh'
}));

const MapFrame = createComponent(
  () => ({
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50vh',
    border: '0'
  }),
  'iframe',
  ['title', 'src', 'allowFullScreen']
);

const GoogleMap = ({ query }: { query: string }) =>
  <MapContainer>
    <MapFrame
      title={`Google map ${query}`}
      src={query}
      className="google-map-item"
      allowFullScreen
    />
  </MapContainer>;

export default GoogleMap;
