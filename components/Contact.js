// @flow
import React from 'react';
import {createComponent} from 'react-fela';
import Heading from './Heading';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Contact = ({description}: { description: string }) => (
  <Container id="contact">
    <Heading>Contact Us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
  </Container>
);

export default Contact;
