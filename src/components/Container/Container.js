// @flow

import { createComponent } from 'react-fela';
import { media } from '../../constants';

const Container = (type: ?string) => createComponent(() => ({
  marginRight: 'auto',
  marginLeft: 'auto',

  [media.tablet]: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    maxWidth: '1170px',
  }
}), type);

export default Container;