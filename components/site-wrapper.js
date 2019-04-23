import React from 'react';
import PropTypes from 'prop-types';
import Box from 'mineral-ui/Box';
import {css} from '@emotion/core';
import {media} from '../config/constants';

function SiteWrapper({children}) {
  return (
    <Box
      marginVertical={0}
      marginHorizontal="auto"
      css={css`
        ${media.tablet} {
          max-width: 970px;
        }
        ${media.desktop} {
          max-width: 1170px;
        }
      `}
    >
      {children}
    </Box>
  );
}

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default SiteWrapper;
