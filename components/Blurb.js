// @flow

import * as React from 'react';
import {createComponent} from 'react-fela';

const Mug = createComponent(
  () => ({
    backgroundColor: '#036',
    float: 'left',
    height: '100px',
    width: '100px',
    borderRadius: '100%',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    marginTop: '1.5rem'
  }),
  'img',
  ['src']
);

const BlurbContainer = createComponent(() => ({}));

type Props = {
  h2?: string;
  h3?: string;
  teamImg?: string;
  text?: string;
  children?: React.Node;
};

const Blurb = ({h2, h3, teamImg, children, text}: Props) => (
  <BlurbContainer>
    {h2 && <h2>{h2}</h2>}
    {h3 && <h3>{h3}</h3>}
    {teamImg && <Mug src={teamImg}/>}
    {children}
    {text && (
      <p
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: text}}
      />
    )}
  </BlurbContainer>
 );

Blurb.defaultProps = {
  h2: undefined,
  h3: undefined,
  teamImg: undefined,
  text: undefined,
  children: undefined
};

export default Blurb;
