// @flow

import React from 'react';
import {gql, graphql} from 'react-apollo';
import styled from 'react-emotion';
import kebabCase from 'lodash/kebabCase';
import GoogleMap from './GoogleMap';
import Blurb from './Blurb';
import Heading from './Heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const MapContainer = styled.div`
  margin-bottom: 1.5rem;
`;

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

const Where = ({locations: [sandyBayBaptist, wellspringChurch]}: Props) => {
  if (sandyBayBaptist && wellspringChurch) {
    return (
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
  }

  return null;
};

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
    locations: (data.events || []).filter(item => item.hasLocation)
  })
});

export default withData(Where);
