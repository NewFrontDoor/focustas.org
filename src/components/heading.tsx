/** @jsx jsx */

import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Styled} from 'theme-ui';
import {useResponsiveValue} from '@theme-ui/match-media';

type HeadingProps = {
  image?: string;
};

const Heading: FC<HeadingProps> = ({image, ...props}) => {
  const isLarge = useResponsiveValue([false, true]);
  const before = {
    '&:before': {
      content: '" "',
      backgroundImage: image && `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      width: '70px',
      left: '-80px',
      bottom: '-10px',
      height: '100px',
      position: 'absolute'
    }
  };

  return (
    <Styled.h2
      {...props}
      sx={{
        position: 'relative',
        ...(isLarge ? before : {})
      }}
    />
  );
};

Heading.propTypes = {
  image: PropTypes.string
};

Heading.defaultProps = {
  image: undefined
};

export default Heading;
