import React from 'react';
import PropTypes from 'prop-types';
import Box from 'mineral-ui/Box';

function SiteWrapper({children}) {
  return (
    <Box
      breakpoints={['narrow']}
      width={['100%', '1170px']}
      marginVertical={0}
      marginHorizontal="auto"
    >
      {children}
    </Box>
  );
}

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default SiteWrapper;
