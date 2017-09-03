// @flow

import {createComponent} from 'react-fela';
import {media} from '../config/constants';

const Heading = createComponent(
  ({image}) => ({
    position: 'relative',
    [media.desktop]: {
      ':before': {
        content: '" "',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        width: '70px',
        left: '-80px',
        bottom: '-10px',
        height: '100px',
        position: 'absolute'
      }
    }
  }),
  'h2'
);

export default Heading;
