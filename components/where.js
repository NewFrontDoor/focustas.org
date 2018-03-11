import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import styled from 'react-emotion';
import kebabCase from 'lodash/kebabCase';
import GoogleMap from './google-map';
import Heading from './heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const MapContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const venues = gql`
  {
    venues: venueMany {
      _id
      description
      hasLocation
      mapUrl
      location {
        street1
      }
    }
  }
`;

const withData = graphql(venues, {
  props: ({data}) => ({
    venues: (data.venues || []).filter(item => item.hasLocation)
  })
});

const Where = ({venues}) => (
  <Container id="where">
    <Heading image="/static/coffee-icon.png">Where we meet</Heading>
    <div id="map">
      {venues.map(venue => (
        <div key={venue._id} id={kebabCase(venue.location.street1)}>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: venue.description}}
          />
          <MapContainer>
            <GoogleMap query={venue.mapUrl}/>
          </MapContainer>
        </div>
      ))}
    </div>
  </Container>
);

Where.propTypes = {
  venues: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      description: PropTypes.string,
      hasLocation: PropTypes.bool,
      mapUrl: PropTypes.string,
      location: PropTypes.shape({
        street1: PropTypes.string
      })
    })
  ).isRequired
};

export default withData(Where);
