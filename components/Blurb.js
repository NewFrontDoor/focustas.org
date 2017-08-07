import React from 'react';
import { createComponent } from 'react-fela';

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

const Blurb = ({ h2, h3, teamImg, children, text }) =>
  <BlurbContainer>
    {h2 && <h2>{h2}</h2>}
    {h3 && <h3>{h3}</h3>}
    {teamImg && <Mug src={teamImg} />}
    {children}
    {text && <span dangerouslySetInnerHTML={{ __html: text }} />}
  </BlurbContainer>;

export default Blurb;
