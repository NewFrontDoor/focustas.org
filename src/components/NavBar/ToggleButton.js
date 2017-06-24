// @flow
import { createComponent } from 'react-fela';
import { media } from '../../constants';

const ToggleButton = createComponent(
  () => ({
    alignSelf: 'flex-start',
    paddingTop: '12px',
    paddingRight: '10px',
    paddingBottom: '12px',
    paddingLeft: '10px',
    marginTop: '.5rem',
    marginRight: '1rem',
    marginBottom: '.5rem',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    border: '1px solid #333',
    borderRadius: '4px',
    [media.tablet]: {
      display: 'none'
    }
  }),
  'button',
  ['type', 'onClick']
);

export default ToggleButton;
