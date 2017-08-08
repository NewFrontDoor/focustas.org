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

const Contact = ({ description }: { description: String }) =>
  <Container id="contact">
    <Heading>Contact Us</Heading>
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </Container>;

export default Contact;
