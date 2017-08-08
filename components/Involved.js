// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import Blurb from './Blurb';
import Heading from './Heading';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const Involved = ({ description }: { description: String }) =>
  <Container id="involved">
    <Heading image="/static/bible.png">Get involved</Heading>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <img src="/static/girls_on_bridge_small.jpg" alt="Girls on a bridge" />
  </Container>;

export default Involved;
