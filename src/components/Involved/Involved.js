// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import Blurb from '../Blurb/Blurb';
import Heading from '../Heading/Heading';
import photo from './girls_on_bridge_small.jpg';
import bible from './bible.png';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Involved = () =>
  <Container id="involved">
    <Heading image={bible}>Get involved</Heading>
    <Blurb h3="Join our list">
      <p>
        Do you want to keep up-to-date with our events? Contact
        {' '}
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
        {' '}
        to join our email list.
      </p>
    </Blurb>
    <Blurb h3="Support FOCUS">
      <p>
        Whether you're a Christian from nearby or overseas, there are many ways
        you or your church group can partner with FOCUS, including prayer,
        donations, cooking meals, volunteering time, sharing about FOCUS, etc.
        To learn more, contact:
        {' '}
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
        .
      </p>
      <p>
        You can also
        {' '}
        <a
          target="blank"
          href="https://support.afes.org.au/support-hobart-focus-university-of-tasmania-hobart-1747"
        >
          donate to FOCUS
        </a>
        .
      </p>
    </Blurb>
    <img src={photo} alt="Girls on a bridge" />
  </Container>;

export default Involved;
