// @flow
import React from 'react';
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
            <Link
              href="#mapChurch"
              to="mapChurch"
              smooth
              duration={500}
              offset={-70}
            >
              (See map)
            </Link>
          </li>
        </ul>
      </Blurb>
    )}
  </Container>;

export default Events;
