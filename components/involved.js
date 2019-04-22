import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Heading from './heading';

const Container = styled('div')`
  margin-top: 6rem;
`;

const Involved = ({description}) => (
  <Container id="involved">
    <Heading image="/static/bible.png">Get involved</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
    <img src="/static/girls_on_bridge_small.jpg" alt="Girls on a bridge" />
  </Container>
);

Involved.propTypes = {
  description: PropTypes.string.isRequired
};

export default Involved;
