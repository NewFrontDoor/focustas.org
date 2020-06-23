import React, {FC} from 'react';
import {Global, css} from '@emotion/core';
import {raleway, ralewayBold} from '../../lib/constants';

const GlobalStyles: FC = () => {
  return (
    <>
      <Global styles={raleway} />
      <Global styles={ralewayBold} />
      <Global
        styles={css`
          html {
            font-size: 125%;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
