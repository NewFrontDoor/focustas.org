import {injectGlobal} from 'emotion';
import {raleway, ralewayBold, typography} from '../config/constants';

export default () => {
  injectGlobal(typography.toString());
  injectGlobal(raleway);
  injectGlobal(ralewayBold);
};
