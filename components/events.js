import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import kebabCase from 'lodash/kebabCase';
import styled from 'react-emotion';
import {Link} from 'react-scroll';
import {media} from '../config/constants';
import Blurb from './blurb';
import Heading from './heading';

const Container = styled.div`
  margin-top: 6rem;
`;

const Photo = styled.img`
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

const Events = ({events}) => {
  const elements = events.map(item => (
    <Blurb key={item.name} h3={item.name} text={item.description}>
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
              href={`#${kebabCase(item.venue.location.street1)}`}
              to={kebabCase(item.venue.location.street1)}
              smooth
              duration={500}
              offset={-70}
            >
              (See map)
            </Link>
          )}
        </li>
      </ul>
    </Blurb>
  ));

  elements.splice(
    1,
    0,
    <img
      key="group-of-students"
      className="events-image"
      src="/static/students_small.png"
      alt="Group of students"
    />
  );
  elements.splice(
    3,
    0,
    <Photo key="icon-row-small" mobile src="/static/icon_row_small.png"/>
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
  ).isRequired
};

export default withData(Events);
