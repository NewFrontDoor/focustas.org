import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Box from 'mineral-ui/Box';
import {media} from '../config/constants';

const LeavesContainer = styled(Box)`
  position: relative;

  &:after {
    content: ' ';
    background-image: url(/static/leaves-full.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: ${({position}) => position} bottom;
    width: 50%;
    height: 100%;
    ${({position}) => `${position}: -1rem`};
    position: absolute;

    ${media.tablet} {
      ${({position}) => `${position}: -20%`};
      bottom: -20%;
    }
  }
`;

function LeavesOverlay({position, ...props}) {
  return (
    <LeavesContainer
      {...props}
      position={position}
      breakpoints={['narrow', 'medium']}
      margin={['0', '1rem', '2rem']}
    />
  );
}

LeavesOverlay.propTypes = {
  position: PropTypes.oneOf(['left', 'right'])
};

LeavesOverlay.defaultProps = {
  position: 'left'
};

export default LeavesOverlay;
