import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Heading from './heading';

const Container = styled('div')`
  margin-top: 6rem;
`;

const Contact = ({description}) => (
  <Container id="contact">
    <Heading>Contact Us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
  </Container>
);

Contact.propTypes = {
  description: PropTypes.string.isRequired
};

export default Contact;
