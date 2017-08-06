// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import Heading from './Heading';
import Blurb from './Blurb';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Contact = () =>
  <Container id="contact">
    <Heading>Contact Us</Heading>
    <Blurb>
      <p>
        We'd love to hear from you.<br />
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
      </p>
    </Blurb>
  </Container>;

export default Contact;
