// @flow

import type {OperationComponent, QueryProps} from 'react-apollo';

import * as React from 'react';
import {gql, graphql} from 'react-apollo';
import styled from 'react-emotion';
import kebabCase from 'lodash/kebabCase';
import type {Event} from '../types';
import GoogleMap from './GoogleMap';
import Heading from './Heading';

type Response = {
  events: Array<Event>;
};

type Props = Response & QueryProps;

const Container = styled.div`
  margin-top: 6rem;
`;

const MapContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const venues = gql`
{
  venues: venueMany {
    description
    hasLocation
    mapUrl
    location {
      street1
    }
  }
}
`;

const withData: OperationComponent<Response, {}, Props> = graphql(venues, {
  props: ({data}) => ({
    venues: (data.venues || []).filter(item => item.hasLocation)
  })
});

const Where = withData(({venues}: Props) => {
  return (
    <Container id="where">
      <Heading image="/static/coffee-icon.png">Where we meet</Heading>
      <div id="map">
        { venues.map(venue => (
          <div key={venue.name} id={kebabCase(venue.location.street1)} >
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: venue.description}}
            />
            <MapContainer>
              <GoogleMap query={venue.mapUrl}/>
            </MapContainer>
          </div>)
          )}
      </div>
    </Container>
  );
});

export default Where;
