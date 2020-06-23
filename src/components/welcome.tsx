/** @jsx jsx */

import {FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import {jsx, Styled} from 'theme-ui';
import LeavesOverlay from './leaves-overlay';
import {builder} from './block-content';

type PhotoProps = {
  isMobileOnly?: boolean;
  src: string;
};

const Photo: FC<PhotoProps> = ({isMobileOnly, ...props}) => (
  <img
    {...props}
    sx={{
      marginTop: '-40px',
      width: 'auto',
      display: [
        isMobileOnly ? 'block' : 'none',
        isMobileOnly ? 'none' : 'block'
      ],
      maxHeight: ['90px', '100%']
    }}
  />
);

Photo.propTypes = {
  isMobileOnly: PropTypes.bool
};

type WelcomeProps = {
  children: ReactNode;
  image?: object;
};

const Welcome: FC<WelcomeProps> = ({children, image}) => (
  <>
    <img
      id="logo"
      src="/Just_leaves-01_small.png"
      alt="Focus Leaves"
      sx={{
        marginLeft: 0,
        float: 'left',
        width: ['110px', '164px'],
        height: ['122px', '194px'],
        marginBottom: [0, '48px']
      }}
    />

    <div
      sx={{
        marginBottom: '2rem',
        paddingBottom: '2rem',
        clear: 'both',
        paddingRight: [0, '2rem'],
        paddingTop: [0, '2rem']
      }}
    >
      <Styled.h1
        sx={{
          fontWeight: 700,
          lineHeight: '1.1',
          fontSize: ['3rem', '3rem', '6rem'],
          letterSpacing: [0, '-2pt'],
          marginTop: 0
        }}
      >
        Welcome
        <br />
        <span
          sx={{
            fontSize: ['60px', '3rem'],
            fontWeight: 200,
            display: ['block', 'inline']
          }}
        >
          to
        </span>{' '}
        FOCUS
      </Styled.h1>
      <div
        sx={{
          fontSize: '1.25rem',
          lineHeight: '1.2',
          color: '#777',
          fontWeight: '200'
        }}
      >
        {children}
      </div>
    </div>
    {image && (
      <LeavesOverlay
        sx={{
          display: ['none', 'block']
        }}
      >
        <Photo src={builder.image(image).url()} />
      </LeavesOverlay>
    )}
    <Photo isMobileOnly src="/icon_row_small.png" />
  </>
);

Welcome.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string
  })
};

Welcome.defaultProps = {
  image: undefined
};

export default Welcome;
