/** @jsx jsx */

import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Box} from 'theme-ui';

const SiteWrapper: FC = props => {
  return (
    <Box
      marginY={0}
      marginX="auto"
      sx={{
        maxWidth: ['100%', '1170px']
      }}
      {...props}
    />
  );
};

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default SiteWrapper;
