// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import GoogleMap from '../GoogleMap/GoogleMap';
import Blurb from '../Blurb/Blurb';
import Heading from '../Heading/Heading';
import coffee from './coffee-icon.png';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const MapContainer = createComponent(
  () => ({
    marginBottom: '1.5rem'
  }),
  'div',
  ['id']
);

const Where = () =>
  <Container id="where">
    <Heading image={coffee}>Where we meet</Heading>
    <Blurb>
      <div id="map">
        <p>We meet for Friday night FOCUS at Sandy Bay Baptist Church.<br /></p>
        <MapContainer id="mapChurch">
          <GoogleMap query="Sandy+Bay+Baptist+Church" />
        </MapContainer>
        <p>
          {' '}
          We meet for small groups and some special events at Wellspring Church.
        </p>
        <MapContainer id="mapHQ">
          <GoogleMap query="Wellspring+Anglican,+43-47+Grosvenor+St,+Sandy+Bay+TAS+7005" />
        </MapContainer>
      </div>
    </Blurb>
  </Container>;

export default Where;
