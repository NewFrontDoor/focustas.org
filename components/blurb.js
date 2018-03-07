import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Mug = styled.img`
  background-color: #036;
  float: left;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

const Blurb = ({h2, h3, teamImg, children, text}) => (
  <div>
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
  </div>
);

Blurb.propTypes = {
  h2: PropTypes.string,
  h3: PropTypes.string,
  teamImg: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.string
};

Blurb.defaultProps = {
  h2: undefined,
  h3: undefined,
  teamImg: undefined,
  text: undefined,
  children: undefined
};

export default Blurb;
