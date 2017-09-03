// @flow

import React from 'react';
import {gql, graphql} from 'react-apollo';
import {createComponent} from 'react-fela';
import kebabCase from 'lodash/kebabCase';
import GoogleMap from './GoogleMap';
import Blurb from './Blurb';
import Heading from './Heading';

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

type Event = {
  hasLocation: boolean;
  mapUrl: string;
  location: {
    street1: string;
  };
};

type Props = {
  locations: Array<Event>;
};

const Where = ({locations: [sandyBayBaptist, wellspringChurch]}: Props) => (
  <Container id="where">
    <Heading image="/static/coffee-icon.png">Where we meet</Heading>
    <Blurb>
      <div id="map">
        <p>We meet for Friday night FOCUS at Sandy Bay Baptist Church.</p>
        <MapContainer id={kebabCase(sandyBayBaptist.location.street1)}>
          <GoogleMap query={sandyBayBaptist.mapUrl}/>
        </MapContainer>
        <p>
          We meet for small groups and some special events at Wellspring Church.
        </p>
        <MapContainer id={kebabCase(wellspringChurch.location.street1)}>
          <GoogleMap query={wellspringChurch.mapUrl}/>
        </MapContainer>
      </div>
    </Blurb>
  </Container>
);

const events = gql`
{
  events: eventMany {
    hasLocation
    mapUrl
    location {
      street1
    }
  }
}
`;

const withData = graphql(events, {
  props: ({data}) => ({
    locations: data.events.filter(item => item.hasLocation)
  })
});

export default withData(Where);
