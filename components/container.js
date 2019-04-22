import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {media} from '../config/constants';

export const Column = styled('div')`
  padding-left: 1rem;
  padding-right: 1rem;
  ${media.tablet} {
    flex-basis: ${({screen}) => screen.tablet};
  }
  ${media.desktop} {
    flex-basis: ${({screen}) => screen.desktop};
  }
`;

Column.propTypes = {
  screen: PropTypes.shape({
    tablet: PropTypes.string,
    desktop: PropTypes.string
  }).isRequired
};
