// @flow

import * as React from 'react';
import {Provider} from 'react-fela';
import felaRenderer from './fela-renderer';

type Props = {
  children: React.Node,
};

export default ({children}: Props) => (
  <Provider renderer={felaRenderer}>
    {children}
  </Provider>
 );
