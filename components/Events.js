// @flow
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import {createComponent} from 'react-fela';
import {Link} from 'react-scroll';
import {media} from '../config/constants';
import Blurb from './Blurb';
import Heading from './Heading';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Photo = createComponent(
  ({mobile}) => ({
    width: 'auto',
    display: mobile ? 'block' : 'none',
    [media.tablet]: {
      maxHeight: '100%',
      display: mobile ? 'none' : 'block'
    }
  }),
  'img',
  ['src']
);

type Event = {
  name: string,
  description: string,
  what: string,
  when: string,
  where: string,
  location: {
    street1: string,
  },
  hasLocation: Boolean,
}

const Events = ({events}: { events: Array<Event> }) => {
  const elements = events.map(item => (
    <Blurb
      key={item.name}
      h3={item.name}
      text={item.description}
    >
      <ul>
        <li><b>What:</b> {item.what}</li>
        <li><b>When:</b> {item.when}</li>
        <li>
          <b>Where:</b>
          {' '}
          {item.where}
          {' '}
          {item.hasLocation && (
            <Link
              href={`#${kebabCase(item.location.street1)}`}
              to={kebabCase(item.location.street1)}
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

  elements.splice(1, 0, <img key="group-of-students" className="events-image" src="/static/students_small.png" alt="Group of students"/>);
  elements.splice(3, 0, <Photo key="icon-row-small" mobile src="/static/icon_row_small.png"/>);

  return (
    <Container id="events">
      <Heading image="/static/coffee-icon.png">Events</Heading>
      {elements}
    </Container>
  );
};

export default Events;
