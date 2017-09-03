// @flow

import {createComponent} from 'react-fela';
import {media} from '../config/constants';

export const createContainer = (type: ?string) =>
  createComponent(
    () => ({
      display: 'block',
      marginRight: 'auto',
      marginLeft: 'auto',
      [media.tablet]: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
        display: 'flex',
        maxWidth: '970px'
      },
      [media.desktop]: {
        maxWidth: '1170px'
      }
    }),
    type
  );

export const Column = createComponent(({width}) => ({
  paddingLeft: '1rem',
  paddingRight: '1rem',
  [media.tablet]: {
    flexBasis: width.tablet
  },
  [media.desktop]: {
    flexBasis: width.desktop
  }
}));

export default createContainer;
