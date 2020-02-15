import React, {FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import {Box} from 'theme-ui';

type LeavesOverlayProps = {
  isMobileOnly?: boolean;
  position?: 'left' | 'right';
  children: ReactNode;
};

const LeavesOverlay: FC<LeavesOverlayProps> = ({position, ...props}) => {
  return (
    <Box
      {...props}
      position={position}
      breakpoints={['narrow', 'medium']}
      margin={['0', '1rem', '2rem']}
      sx={{
        position: 'relative',

        '&:after': {
          content: '" "',
          backgroundImage: 'url(/leaves-full.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: `${position} bottom`,
          width: '50%',
          height: '100%',
          position: 'absolute',
          [position]: ['-1rem', `-20%`],
          bottom: [0, '-20%']
        }
      }}
    />
  );
};

LeavesOverlay.propTypes = {
  position: PropTypes.oneOf(['left', 'right'])
};

LeavesOverlay.defaultProps = {
  position: 'left'
};

export default LeavesOverlay;
