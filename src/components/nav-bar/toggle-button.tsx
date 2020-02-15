/** @jsx jsx */
import {FC, HTMLProps} from 'react';
import {jsx} from 'theme-ui';

const ToggleButton: FC<HTMLProps<HTMLButtonElement>> = props => (
  <button
    {...props}
    type="button"
    sx={{
      alignSelf: 'flex-start',
      paddingTop: '12px',
      paddingRight: '10px',
      paddingBottom: '12px',
      paddingLeft: '10px',
      marginTop: '0.5rem',
      marginRight: '1rem',
      marginBottom: '0.5rem',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      border: '1px solid #333',
      borderRadius: '4px',
      display: ['block', 'none']
    }}
  />
);

export default ToggleButton;
