import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Heading from './heading';
import LeavesOverlay from './leaves-overlay';

const Container = styled('div')`
  margin-top: 6rem;
`;

const Involved = ({description, image}) => (
  <Container id="involved">
    <Heading image="/static/bible.png">Get involved</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
    {image && (
      <LeavesOverlay mobile position="right">
        <img src={image.url} alt="Girls on a bridge" />
      </LeavesOverlay>
    )}
  </Container>
);

Involved.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string
  }),
  description: PropTypes.string.isRequired
};

Involved.defaultProps = {
  image: null
};

export default Involved;
