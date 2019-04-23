import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import kebabCase from 'lodash/kebabCase';
import styled from '@emotion/styled';
import {Link} from 'react-scroll';
import {media} from '../config/constants';
import Heading from './heading';
import LeavesOverlay from './leaves-overlay';

const Container = styled('div')`
  margin-top: 6rem;
`;

const Photo = styled('img')`
  width: auto;
  display: ${({mobile}) => (mobile ? 'block' : 'none')};
  ${media.tablet} {
    max-height: 100%;
    display: ${({mobile}) => (mobile ? 'none' : 'block')};
  }
`;

const events = gql`
  {
    events: eventMany {
      name
      description
      what
      when
      where
      venue {
        name
        description
        location {
          street1
        }
      }
    }
  }
`;

const withData = graphql(events, {
  props: ({data}) => ({
    events: data.events || []
  })
});

const Events = ({image, events}) => {
  const elements = events.map(item => (
    <React.Fragment key={item.name}>
      <h3>{item.name}</h3>
      <ul>
        <li>
          <b>What:</b> {item.what}
        </li>
        <li>
          <b>When:</b> {item.when}
        </li>
        <li>
          <b>Where:</b> {item.where}{' '}
          {item.venue && (
            <Link
              smooth
              href={`#${kebabCase(item.venue.location.street1)}`}
              to={kebabCase(item.venue.location.street1)}
              duration={500}
              offset={-70}
            >
              (See map)
            </Link>
          )}
        </li>
      </ul>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: item.description}}
      />
    </React.Fragment>
  ));

  if (image) {
    elements.splice(
      1,
      0,
      <LeavesOverlay key="group-of-students" mobile position="right">
        <img className="events-image" src={image.url} alt="Group of students" />
      </LeavesOverlay>
    );
  }

  elements.splice(
    3,
    0,
    <Photo key="icon-row-small" mobile src="/static/icon_row_small.png" />
  );

  return (
    <Container id="events">
      <Heading image="/static/coffee-icon.png">Events</Heading>
      {elements}
    </Container>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      what: PropTypes.string,
      when: PropTypes.string,
      where: PropTypes.string,
      venue: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.shape({
          street1: PropTypes.string
        })
      })
    })
  ).isRequired,
  image: PropTypes.shape({
    url: PropTypes.string
  })
};

Events.defaultProps = {
  image: null
};

export default withData(Events);
