import React, {FC} from 'react';
import {Global} from '@emotion/core';
import {raleway, ralewayBold} from '../../lib/constants';

const GlobalStyles: FC = () => {
  return (
    <>
      <Global styles={raleway} />
      <Global styles={ralewayBold} />
    </>
  );
};

export default GlobalStyles;
