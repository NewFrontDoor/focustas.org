// @flow
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { createComponent } from 'react-fela';
import { Link } from 'react-scroll';
import Blurb from './Blurb';
import Heading from './Heading';
import { media } from '../config/constants';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Photo = createComponent(
  ({ mobile }) => ({
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
  name: String,
  description: String,
  what: String,
  when: String,
  where: String,
  location: {
    street1: String,
  },
  hasLocation: Boolean,
}

const Events = ({ events }: { events: Array<Event> }) =>
  <Container id="events">
    <Heading image="/static/coffee-icon.png">Events</Heading>
    {events.map((item) =>
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
    )}
  </Container>;

export default Events;
